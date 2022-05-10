import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import './common/colors.css';

function App({http, authService, challengeService}) {
  return (
    <BrowserRouter>
      <Routes 
        http = {http} 
        authService = {authService}
        challengeService = {challengeService}/>
    </BrowserRouter>
  )
}
export default App;