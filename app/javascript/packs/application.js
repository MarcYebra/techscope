// app/javascript/packs/application.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'; // Your main React component

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  );
});

