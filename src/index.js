import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './App';
import './common/colors.css';
import '../src/css/app.css';
import '../src/css/navbar.css';
import HttpClient from './network/http.js';


const baseUrl = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseUrl);

ReactDOM.render(
  <React.StrictMode>
    <App http = {httpClient} />
  </React.StrictMode>,
  document.getElementById('root')
);


