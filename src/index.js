import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Framework from './Framework';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <Framework />,
    document.getElementById('work_list_wrapper')
);
registerServiceWorker();

