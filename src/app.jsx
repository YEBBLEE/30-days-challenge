import React, { Component } from 'react';
import Challenges from './components/challenges';
import '@fortawesome/fontawesome-free/js/all.js';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Challenges/>
      </>
      
    );
  }
}

export default App;
