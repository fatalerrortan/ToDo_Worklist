/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';
import DB from './backend/DB';

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
            this.props.newItem(input);
            let postData = new FormData();
            postData.append('item_name',input);
            postData.append('target_function', 'createItem');
            this.db.createItem(postData);
        }
    }

    render(){
        return(
            <form>
                <h3>Test ToDo Input</h3>
                <input type="text" placeholder="work"
                    onKeyDown={this.setItemInput}
                />
            </form>
        );
    }
}

export default ListInput;
