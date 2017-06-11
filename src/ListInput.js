/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';
import DB from './backend/DB';
import {Form ,FormGroup, Col, FormControl} from 'react-bootstrap';

class ListInput extends React.Component {

    constructor(props){
        super(props);
        this.db = new DB();
        this.setItemInput = this.setItemInput.bind(this);
    }

    setItemInput(item){
        if(item.keyCode === 13){
            //to prevent from refreshing the form
            item.preventDefault();
            let input = item.target.value;
            let postData = new FormData();
            postData.append('item_name',input);
            postData.append('target_function', 'createItem');
            this.db.createItem(postData);
            this.props.newItem();
            //clean the input field
            item.target.value = '';
        }
    }

    render(){
        return(
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col sm={10}>
                        <FormControl type="text" onKeyDown={this.setItemInput} placeholder="plz press Enter to input your work"/>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default ListInput;
