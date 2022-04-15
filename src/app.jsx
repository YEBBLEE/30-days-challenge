import React, { Component } from 'react';
import Challenges from './components/challenges';
import '@fortawesome/fontawesome-free/js/all.js';
import Navbar from './components/navbar';

class App extends Component {
  
  state = {
    challenges : [
        {
            id:1,
            title: '😎 1일 1 개발 블로그 포스팅💗',
            days: [
                {number:1 , isChecked: true},
                {number:2 , isChecked: true},
                {number:3 , isChecked: true},
                {number:4 , isChecked: false},
                {number:5 , isChecked: false},
                {number:6 , isChecked: false},
                {number:7 , isChecked: false},
                {number:8 , isChecked: false},
                {number:9 , isChecked: false},
                {number:10 , isChecked: false},
                {number:11, isChecked: false},
                {number:12 , isChecked: false},
                {number:13 , isChecked: false},
                {number:14 , isChecked: false},
                {number:15 , isChecked: false},
                {number:16 , isChecked: false},
                {number:17 , isChecked: false},
                {number:18 , isChecked: false},
                {number:19 , isChecked: false},
                {number:20 , isChecked: false},
                {number:21 , isChecked: false},
                {number:22 , isChecked: false},
                {number:23 , isChecked: false},
                {number:24 , isChecked: false},
                {number:25 , isChecked: false},
                {number:26 , isChecked: false},
                {number:27 , isChecked: false},
                {number:28 , isChecked: false},
                {number:29 , isChecked: false},
                {number:30 , isChecked: false},
            ],
            startDate: new Date().toLocaleDateString(),
            endDate: new Date().toLocaleDateString(),
            isProgress: true
        },
        {
            id:2,
            title: '🧎‍♀️🌟매일 아침 10분 스트레칭',
            days: [
                {number:1 , isChecked: false},
                {number:2 , isChecked: false},
                {number:3 , isChecked: false},
                {number:4 , isChecked: false},
                {number:5 , isChecked: false},
                {number:6 , isChecked: false},
                {number:7 , isChecked: false},
                {number:8 , isChecked: false},
                {number:9 , isChecked: false},
                {number:10 , isChecked: false},
                {number:11, isChecked: false},
                {number:12 , isChecked: false},
                {number:13 , isChecked: false},
                {number:14 , isChecked: false},
                {number:15 , isChecked: false},
                {number:16 , isChecked: false},
                {number:17 , isChecked: false},
                {number:18 , isChecked: false},
                {number:19 , isChecked: false},
                {number:20 , isChecked: false},
                {number:21 , isChecked: false},
                {number:22 , isChecked: false},
                {number:23 , isChecked: false},
                {number:24 , isChecked: false},
                {number:25 , isChecked: false},
                {number:26 , isChecked: false},
                {number:27 , isChecked: false},
                {number:28 , isChecked: false},
                {number:29 , isChecked: false},
                {number:30 , isChecked: false},
            ],
            startDate: new Date().toLocaleDateString(),
            endDate: new Date().toLocaleDateString(),
            isProgress: true
        }
    ]
  }
  
  handleStart = (title) => {
    const challenge = {
      id:Date.now(),
      title,
      days: [
        {number:1 , isChecked: false},
        {number:2 , isChecked: false},
        {number:3 , isChecked: false},
        {number:4 , isChecked: false},
        {number:5 , isChecked: false},
        {number:6 , isChecked: false},
        {number:7 , isChecked: false},
        {number:8 , isChecked: false},
        {number:9 , isChecked: false},
        {number:10 , isChecked: false},
        {number:11, isChecked: false},
        {number:12 , isChecked: false},
        {number:13 , isChecked: false},
        {number:14 , isChecked: false},
        {number:15 , isChecked: false},
        {number:16 , isChecked: false},
        {number:17 , isChecked: false},
        {number:18 , isChecked: false},
        {number:19 , isChecked: false},
        {number:20 , isChecked: false},
        {number:21 , isChecked: false},
        {number:22 , isChecked: false},
        {number:23 , isChecked: false},
        {number:24 , isChecked: false},
        {number:25 , isChecked: false},
        {number:26 , isChecked: false},
        {number:27 , isChecked: false},
        {number:28 , isChecked: false},
        {number:29 , isChecked: false},
        {number:30 , isChecked: false},
      ],
      startDate: new Date().toLocaleDateString(),
      endDate: this.setEndDate(),
      isProgress: true
    };
    const challenges = [challenge, ...this.state.challenges];
    this.setState({challenges});
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
        />
      </>
      
    );
  }
}

export default App;
