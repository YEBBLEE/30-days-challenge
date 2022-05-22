import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import Challenges from './Challenges';
import Login from './Login';
import Home from './Home';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './Navbar';
import ModalAlert from './ModalAlert';

class Routes extends Component {
  
  state = {
    user: undefined,
    text :'',
    isAlert : false,
  }

  http = this.props.http;
  authService = this.props.authService;
  challengeService = this.props.challengeService;

  handleSignup = (nickname, password, email, url) => {
    this.authService
      .signup(nickname, password, email, url)
      .then((result) => {
        const user = result;
        this.setState({user});
        this.props.history.push('/challenges');
      })      
      .catch(error => {
        const text = error.message.toString();
        this.setState({text, isAlert : true});
      });
  };

  handleLogin = (nickname, password) => {
    this.authService
      .login(nickname, password)
      .then((result) => {
        const user = result;
        this.setState({user});
        this.props.history.push('/challenges');
      })
      .catch(error => {
        const text = error.message.toString();
        this.setState({text, isAlert : true});
      });
  };

  handleLogout = () => {
    this.authService
      .logout()
      .then(() => {
        this.setState({user:undefined});
        this.handleModalClose();
      })
      .catch(error => {
        console.log('error', error); 
      });
  };

  handleModalClose = () => {
    this.setState({text:'',isAlert:false});
  }

  initializeUser = async () => {
    const nickname =  window.localStorage.getItem('nickname');
    const token = window.localStorage.getItem('token');
    if(!nickname || !token) return;

    token && this.authService
      .me(token)
      .then((result)=>{
        const user = result;
        this.setState({user});
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  componentDidMount() {
    this.initializeUser();
  }

  render() {
    return (
      <>
        <Navbar 
          user = {this.state.user}
          onLogout = {this.handleLogout}
        />
        {!this.state.user ? <Redirect to="/" /> : <Redirect to="/challenges" />}
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path="/login" exact>
            {this.state.text && 
              <ModalAlert 
                text={this.state.text} 
                isAlert={this.state.isAlert} 
                onClose={this.handleModalClose}/>
            }
            <Login
              onSignup = {this.handleSignup}
              onLogin = {this.handleLogin}/>
          </Route>
          <Route path="/challenges">
              <Challenges
                user = {this.state.user}
                challengeService = {this.challengeService}/>
          </Route>
        </Switch>
      </>
    );
  }
}

export default Routes;