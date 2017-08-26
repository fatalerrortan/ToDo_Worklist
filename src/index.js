import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import FrameworkContainer from './FrameworkContainer';
import rootReducer from './Redux/reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
// const loggerMiddleware = createLogger();

let store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware
));

ReactDOM.render(
    <Provider store={store}>
        <FrameworkContainer />
    </Provider>,
    document.getElementById('work_list_wrapper')
);
registerServiceWorker();



