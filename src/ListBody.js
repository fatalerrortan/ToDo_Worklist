/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';
import {Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
// var FontAwesome = require('react-fontawesome');
// import keyIndex from 'react-key-index';

class ListBody extends React.Component {

    constructor(props){
        super(props);
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
                     <td><a href="#"><FontAwesome name="trash-o" /></a></td>
                 </tr>
             );
        }
        return output;
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