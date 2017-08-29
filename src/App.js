import React from 'react';
import ListInput from './ListInput';
import ListBody from './ListBody';

class App extends React.Component {

  constructor(props){
    super(props);
    this.props.fetchList();
  }

  render(){
       // console.log('props from target component',this.props.match);
    return(
        <div>
            <div className="row">
                <div className="col-md-offset-4">
                    <h1>- React Todo List -</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-2 col-md-10">
                    <ListInput
                        addItem={this.props.addItem}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <ListBody
                        deleteItem={this.props.deleteItem}
                        items={this.props.list}
                        markItem={this.props.markItem}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
