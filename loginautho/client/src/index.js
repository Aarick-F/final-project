import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker'; //what does it do?

import {
    BrowserRouter as Router
} from 'react-router-dom';

ReactDOM.render(( <
    Router >
    <
    App / >
    <
    /Router>
), document.getElementById('root'));
registerServiceWorker();