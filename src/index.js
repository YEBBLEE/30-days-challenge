import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './App';
import './common/colors.css';
import '../src/css/app.css';
import '../src/css/navbar.css';
import HttpClient from '../src/network/http.js';
import AuthService from '../src/service/auth.js';

const baseUrl = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseUrl);
const authService = new AuthService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App 
      http = {httpClient} 
      authService = {authService} />
  </React.StrictMode>,
  document.getElementById('root')
);


