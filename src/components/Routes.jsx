import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import Challenges from './Challenges';
import Login from './Login';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ProgressCount from './ProgressCount';
import Navbar from './Navbar';

class Routes extends Component {
  
  state = {
    challenges : [],
    user: undefined
  }

  http = this.props.http;
  authService = this.props.authService;
  
  handleSignup = (nickname, password, email, url) => {
    this.props.authService
      .signup(nickname, password, email, url)
      .then((result) => {
        const user = result;
        this.setState({user});
        this.props.history.push('/challenges');
      })
      .catch(error => console.log('error', error));
  };

  handleLogin = (nickname, password) => {
    this.props.authService
      .login(nickname, password)
      .then((result) => {
        const user = result;
        this.setState({user});
        this.props.history.push('/challenges');
      })
      .catch(error => console.log('error', error));
  };

  handleLogout = () => {
    this.props.authService
      .logout()
      .then(() => {
        this.setState({user:undefined});
      })
      .catch(error => console.log('error', error));
  };

  componentDidMount() {
    // if (this.isToken && this.nickname) {
    //   const query = nickname ? `?nickname=${this.nickname}` : '';
    //   const reqOptions = {
    //     method: 'GET',
    //     redirect: 'follow',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   };
          
    //   fetch(`http://localhost:8080/challenges${query}`, reqOptions)
    //     .then(res => {
    //       const result = res.json();
    //       if(res.status > 299 || res.status < 200) {
    //         const msg = result && result.message ? result.message : 'Something Wrong!';
    //         const error = new Error(msg);
  
    //         throw error;
    //       }
    //       return result;
    //     })
    //     .then(result => {
    //       console.log(result);
    //       this.setState({challenges: result});
    //     })
    //     .catch(error => console.log('error', error));  
    // }else {
    //   return
    // }
  }
  
  componentWillUnmount() {

  }

  handleStart = (title) => {
    const result = this.http.sendRequest
    ('/challenges',{
      method: 'POST',
      body: JSON.stringify({title,nickname:'YEBIN'})
    });
    
    result
      .then((result) => {
        const challenge = result;
        const challenges = [challenge, ...this.state.challenges];
        this.setState({challenges});
      })
      .catch((err) => console.log('error',err));
  }
  
  handleModify = (title,challenge) => {
    const challengeId = challenge.id;

    const result = this.http.sendRequest
    (`/challenges/${challengeId}`,
      { method: 'PUT',body: JSON.stringify({title,nickname:'YEBIN'})}
    );

    result 
      .then((result) => {
        const modified = result;
        let challenges = [...this.state.challenges];
        challenges.splice(challenges.indexOf(challenge),1,modified);
        this.setState({challenges});
      })
      .catch((err) => console.log('error',err));
  }

  handleDelete = (challenge) => {
    const challengeId = challenge.id;

    const result = this.http.sendRequest
    (`/challenges/${challengeId}`,{ method: 'DELETE'});

    result
    .then(() => {
      const challenges = this.state.challenges.filter(challenge => challenge.id !== challengeId );
      this.setState({challenges});
    })
    .catch(error => console.log('error', error));
  }

  handleNumber = (challenge,days,isChecked,number) => {
    const daysId = days.id;

    const result = this.http.sendRequest
    (`/challenges/days/${daysId}`,{
      method: 'PUT',
      body : JSON.stringify({number,isChecked})
    });

    result
      .then((result) => {
        let challenges = [...this.state.challenges];
        const chIdx = challenges.indexOf(challenge);
        const modifiedChallenge = result;
        challenges.splice(chIdx,1,modifiedChallenge);
        this.setState({challenges});
      })
      .catch(error => console.log('error', error));
  }

  setEndDate = () => {
    let date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toLocaleDateString();
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
          <Route path="/login">
            <Login
              onSignup = {this.handleSignup}
              onLogin = {this.handleLogin}/>
          </Route>
          <Route path="/challenges">
              <ProgressCount 
                countNumber={this.state.challenges.filter(challenge => challenge.isProgress).length}
              />
              <Challenges
              challenges={this.state.challenges}
              onStart={this.handleStart}
              onDelete={this.handleDelete}
              onModify={this.handleModify}
              onNumberClicked={this.handleNumber}
            />
          </Route>
        </Switch>
      </>
    );
  }
}

export default Routes;
