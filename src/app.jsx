import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import Challenges from './components/Challenges';
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
    const modified = {...challenge,title:title};
    let challenges = [...this.state.challenges];
    challenges.splice(challenges.indexOf(challenge),1,modified);
    this.setState({challenges});
  }

  handleDelete = (challenge) => {
    let deleteId = challenge.id;
    const challenges = this.state.challenges.filter(challenge => challenge.id !== deleteId );
    this.setState({challenges});
  }

  handleNumber = (challenge,day,isChecked) => {
    let dayList = challenge.days.days;

    const modifiedDay = {...day,isChecked:isChecked};
    
    dayList.splice(dayList.indexOf(day),1,modifiedDay);
    
    let challenges = [...this.state.challenges];
    const chIdx = challenges.indexOf(challenge);
    challenge.days.days = dayList;
    challenges.splice(chIdx,1,challenge);
    this.setState({challenges});
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
          countNumber={this.state.challenges.filter(challenge => challenge.isProgress).length}
        />
        <Challenges
          challenges={this.state.challenges}
          onStart={this.handleStart}
          onDelete={this.handleDelete}
          onModify={this.handleModify}
          onNumberClicked={this.handleNumber}
        />
      </>
      
    );
  }
}

export default App;
