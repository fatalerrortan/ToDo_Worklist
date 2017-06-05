/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';

class ListInput extends React.Component {

    constructor(props){
        super(props);
        this.setItemInput = this.setItemInput.bind(this);
    }

    setItemInput(item){

        if(item.keyCode === 13){
            //to prevent from refreshing the form
            item.preventDefault();
            // console.log(item.target.value);
            this.props.newItem(item.target.value);
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
