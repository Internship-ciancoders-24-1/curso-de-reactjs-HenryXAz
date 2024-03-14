import React from 'react';
import ReactDOM from 'react-dom';

// styles
import "bootstrap/dist/css/bootstrap.css";
import  "./global.css" 
import App from './components/App';


const container = document.getElementById('app');

ReactDOM.render(<App />, container);