import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './app';
import './common/colors.css';
import '../src/css/app.css';
import '../src/css/navbar.css';
import '../src/css/modalAlert.css';
import '../src/common/progressive.css';
import HttpClient from '../src/network/http.js';
import AuthService from '../src/service/auth.js';
import ChallengeService from './service/challenges.js';

const baseUrl = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseUrl);
const authService = new AuthService(httpClient);
const challengeService = new ChallengeService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App 
      http = {httpClient} 
      authService = {authService} 
      challengeService = {challengeService}/>
  </React.StrictMode>,
  document.getElementById('root')
);


