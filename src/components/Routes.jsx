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

class Routes extends Component {
  
  state = {
    user: undefined
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
      .catch(error => console.log('error', error));
  };

  handleLogin = (nickname, password) => {
    this.authService
      .login(nickname, password)
      .then((result) => {
        const user = result;
        this.setState({user});
        this.props.history.push('/challenges');
      })
      .catch(error => console.log('error', error));
  };

  handleLogout = () => {
    this.authService
      .logout()
      .then(() => {
        this.setState({user:undefined});
      })
      .catch(error => console.log('error', error));
  };

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
          <Route path="/login">
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