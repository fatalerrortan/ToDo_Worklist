import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import App from './App';
import Config from './Config';
import Login from './Login';

class Framework extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillMount(){
        // console.log('Current State:' + this.state.isLoggedIn);
    }

    handleLogin(){
        let newState = !this.state.isLoggedIn;
        this.setState({
            isLoggedIn: newState
        });
        // console.log(this.state.isLoggedIn);
    }

    render(){
        console.log(this.state.isLoggedIn);
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() =>{
                        return this.state.isLoggedIn ? (<App />):(<Login auth={this.handleLogin}/>);
                    }} />
                    <Route path='/config' component={Config} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Framework;
