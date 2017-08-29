/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';
import {Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class ListBody extends React.Component {

    constructor(props){
        super(props);
    }

    getPreparedItems(items){
        let  output = [];
        for(let item in items){
             output.push(
                 <tr key={item} style={items[item].is_mark ? this.loadMarktItem() : {}}>
                     <td>{items[item].created_at}</td>
                     <td>{items[item].work}</td>
                     <td>
                         <a href="#" onClick={() => {this.props.markItem(items[item].id, items[item].is_mark)}}><FontAwesome name="rocket" /></a>
                     </td>
                     {/*{you should use arrow function to avoid onlick function to be called before rendering}*/}
                     <td><a href="#" onClick={() => {this.props.deleteItem(items[item].id)}}><FontAwesome name="trash-o" /></a></td>
                 </tr>
             );
        }
        return output;
    }

    loadMarktItem(){
        return(
            {background: '#FCEE89'}
        );
    }

    render(){
        let items = this.getPreparedItems(this.props.items);
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