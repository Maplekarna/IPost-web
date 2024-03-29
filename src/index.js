import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// index.html --> index.css + index.js --> App.js
// Parameters of render, render is a method.
ReactDOM.render(
    <BrowserRouter>
      <App /> 
    </BrowserRouter>,
  document.getElementById('root')  // Control DOM
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
