/**
 * Created by X.Tan on 6/4/2017.
 */
import React from 'react';
import keyIndex from 'react-key-index';

class ListBody extends React.Component {

    constructor(props){
        super(props);
    }

    indexGenerate(items){
        let itemWithIndex = keyIndex(items, 1);
        let output = itemWithIndex.map(
            (item) =>
                <tr key={item._id}><td>{item.value}</td></tr>
        );
        return output;
    }

    render(){
        console.log(this.props.test);
        let items = this.indexGenerate(this.props.items);
        // console.log(this.props.items);
        return(
            <table>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
}

export default ListBody;