import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import './common/colors.css';

function App({http, authService}) {
  return (
    <BrowserRouter>
      <Routes 
        http = {http} 
        authService = {authService} />
    </BrowserRouter>
  )
}
export default App;