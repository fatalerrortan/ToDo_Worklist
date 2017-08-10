import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import App from './App';
import Config from './Config';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

// ReactDOM.render(<App />, document.getElementById('work_list_wrapper'));
ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/app' component={App} />
                <Route path='/config' component={Config} />
            </Switch>
    </BrowserRouter>,
    document.getElementById('work_list_wrapper')
);
registerServiceWorker();

