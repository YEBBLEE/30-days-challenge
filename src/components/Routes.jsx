import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import Challenges from './Challenges';
import Login from './Login';
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
        console.log(text);
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
        console.log(text);
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

  initializeUser = () => {
    const nickname = window.localStorage.getItem('nickname');
    const token = window.localStorage.getItem('token');
    if(!nickname || !token) return;

    const user = {token, nickname};
    this.setState({user});
  }

  componentDidMount() {
    this.initializeUser();
  }

  render() {
    console.log('Routes컴포넌트 Render');
    return (
      <>
        <Navbar 
          user = {this.state.user}
          onLogout = {this.handleLogout}
        />
        {!this.state.user ? <Redirect to="/" /> : <Redirect to="/challenges" />}
        <Switch>
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