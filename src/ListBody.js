/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';
import {Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import DB from './backend/DB';
// import keyIndex from 'react-key-index';

class ListBody extends React.Component {

    constructor(props){
        super(props);
        this.db = new DB();
        this.deleteItem = this.deleteItem.bind(this);
    }

    indexGenerate(items){
        let  output = [];
        for(let item in items){
             output.push(
                 <tr key={item}>
                     <td>{items[item].created_at}</td>
                     <td>{items[item].work}</td>
                     <td>
                         <a href="#"><FontAwesome name="rocket" /></a>
                     </td>
                     {/*{you should use arrow function to avoid onlick function to be called before rendering}*/}
                     <td><a href="#" onClick={() => {this.deleteItem(item, items[item].id)}}><FontAwesome name="trash-o" /></a></td>
                 </tr>
             );
        }
        return output;
    }

    deleteItem(dom_id, item_id){
        let postData = new FormData();
        postData.append('item_id',item_id);
        postData.append('target_function', 'deleteItem');
        this.db.operateItem(postData);
        this.props.itemToDelete(dom_id);
        console.log('deleted');
    }

    render(){
        let items = this.indexGenerate(this.props.items);
        return(
            <Table responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Created_At</th>
                        <th>Todo</th>
                        <th>Mark</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
    );
    }
}

export default ListBody;