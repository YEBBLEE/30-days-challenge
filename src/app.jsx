import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import Challenges from './components/Challenges';
import Login from './components/Login';
import './common/colors.css';
import {
  BrowserRouter  as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProgressCount from './components/ProgressCount';
import Navbar from './components/Navbar';

class App extends Component {
  
  state = {
    challenges : []
  }
  
  componentDidMount() {
    const nickname = 'YEBIN';
    const query = nickname ? `?nickname=${nickname}` : '';
    
    const reqOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      }
    };
        
    fetch(`http://localhost:8080/challenges${query}`, reqOptions)
      .then(res => {
        const result = res.json();
        if(res.status > 299 || res.status < 200) {
          const msg = result && result.message ? result.message : 'Something Wrong!';
          const error = new Error(msg);

          throw error;
        }
        return result;
      })
      .then(result => {
        console.log(result);
        this.setState({challenges: result});
      })
      .catch(error => console.log('error', error));
  }
  
  componentWillUnmount() {

  }

  handleStart = (title) => {

    const reqOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title,nickname:'YEBIN'})
    };

    fetch(`http://localhost:8080/challenges`, reqOptions)
      .then(res => {
        const result = res.json();
        if(res.status > 299 || res.status < 200) {
          const msg = result && result.message ? result.message : 'Something Wrong!';
          const error = new Error(msg);

          throw error;
        }
        return result
      })
      .then((result) => {
        const challenge = result;
        const challenges = [challenge, ...this.state.challenges];
        this.setState({challenges});
      })
      .catch(error => console.log('error', error));
  }
  
  handleModify = (title,challenge) => {

    const challengeId = challenge.id;

    const reqOptions = {
      method: 'PUT',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title,nickname:'YEBIN'})
    };

    fetch(`http://localhost:8080/challenges/${challengeId}`, reqOptions)
      .then(res => {
        const result = res.json();
        if(res.status > 299 || res.status < 200) {
          const msg = result && result.message ? result.message : 'Something Wrong!';
          const error = new Error(msg);

          throw error;
        }
        return result
      })
      .then((result) => {
        const modified = result;
        let challenges = [...this.state.challenges];
        challenges.splice(challenges.indexOf(challenge),1,modified);
        this.setState({challenges});
      })
      .catch(error => console.log('error', error));
  }

  handleDelete = (challenge) => {
    const challengeId = challenge.id;

    const reqOptions = {
      method: 'DELETE',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`http://localhost:8080/challenges/${challengeId}`, reqOptions)
      .then(res => {
        let result;
        if(res.status > 299 || res.status < 200) {
          const msg = result && result.message ? result.message : 'Something Wrong!';
          const error = new Error(msg);
          throw error;
        }
        return result;
      })
      .then(() => {
        const challenges = this.state.challenges.filter(challenge => challenge.id !== challengeId );
        this.setState({challenges});
      })
      .catch(error => console.log('error', error));
  }

  handleNumber = (challenge,days,isChecked,number) => {
    const daysId = days.id;

    const reqOptions = {
      method: 'PUT',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({number,isChecked})
    };

    fetch(`http://localhost:8080/challenges/days/${daysId}`, reqOptions)
      .then(res => {
        let result = res.json();
        if(res.status > 299 || res.status < 200) {
          const msg = result && result.message ? result.message : 'Something Wrong!';
          const error = new Error(msg);
          throw error;
        }
        return result;
      })
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
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/login">
            <Login/>
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
      </Router>
    );
  }
}

export default App;
