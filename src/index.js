import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import FrameworkContainer from './FrameworkContainer';
import reducer from './Redux/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

let store = createStore(reducer);
// console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <FrameworkContainer />
    </Provider>,
    document.getElementById('work_list_wrapper')
);
registerServiceWorker();



