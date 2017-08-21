import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import App from './App';
import Config from './Config';
import Login from './Login';

class Framework extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.state.isLoggedIn);
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() =>{
                        return this.props.isLoggedIn ? (<App />):(<Login auth={this.props.doLogin} />);
                    }} />
                    <Route path='/config' component={Config} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Framework;
