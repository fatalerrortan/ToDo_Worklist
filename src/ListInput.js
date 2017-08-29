/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';
import {Form ,FormGroup, Col, FormControl} from 'react-bootstrap';

class ListInput extends React.Component {

    constructor(props){
        super(props);
        this.setItemInput = this.setItemInput.bind(this);
    }

    setItemInput(item){
        if(item.keyCode === 13){
            //to prevent from refreshing the form
            item.preventDefault();
            let newItem = item.target.value;
            this.props.addItem(newItem);
            //clean the input field
            item.target.value = '';
        }
    }

    render(){
        return(
            <Form horizontal>
                <FormGroup controlId="formHorizontalWork">
                    <Col sm={10}>
                        <FormControl type="text" onKeyDown={this.setItemInput} placeholder="plz press Enter to input your work"/>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default ListInput;
