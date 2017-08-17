import React from 'react';
import {Grid,Row,Col,
       Form,FormGroup,ControlLabel,FormControl,Button
        } from 'react-bootstrap'

class Login extends React.Component{

    constructor(props){
      super(props);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(props){
        props.preventDefault();
        const account = this.accout.value;
        const password = this.password.value;
        this.props.auth();
    }

    render(){
        return(
            <Grid className="todoListLoginForm">
                <Row className="well">
                    <Col md={6} mdOffset={3}>
                        <Form horizontal onSubmit={this.handleFormSubmit}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        inputRef={(input) => {this.accout = input}}
                                        type="email" placeholder="Test Account: test@test.com" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        inputRef={(input) => {this.password = input}}
                                        type="password" placeholder="Test Password: test" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                        Sign In
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Login;