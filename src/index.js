import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Import the component BrowserRouter and save it as Router
import { BrowserRouter as Router } from 'react-router-dom'

// Thanks to <Router><App /></Router>, we enable the routing system inside the App component
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));