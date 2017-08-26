import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import AppContainer from './AppContainer';
import Config from './Config';
import Login from './Login';

class Framework extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() =>{
                        return this.props.isLoggedIn ? (<AppContainer />) : (<Login auth={this.props.doLogin} />);
                    }} />
                    <Route path='/config' component={Config} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Framework;
