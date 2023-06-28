import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const userAgentData = navigator.userAgentData || navigator.webkitGetUserAgentData();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App userAgentData={userAgentData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
