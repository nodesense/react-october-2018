// index.js
// bootstrap react into browser
import React from 'react';
// diffing, patching, event queue, life cycle invocation etc
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';

// default import, no curly brace
import App from './app/App';
import "./index.css";

import {Provider} from 'react-redux';
import store from './app/store';

// ReactDOM.render(virtual dom, real dom)
// uni directional data flow
// virtual dom ==> real dom

// Provide shall pass store to container components as context
ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
            , 
                document.getElementById('root'))
