import React from 'react';
import ReactDOM from 'react-dom';

// styles
import "bootstrap/dist/css/bootstrap.css";
import  "./global.css" 
// import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges'

// import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);