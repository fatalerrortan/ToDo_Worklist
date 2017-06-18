import React from 'react';
import ListInput from './ListInput';
import ListBody from './ListBody';
import DB from './backend/DB';


class App extends React.Component {

  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.markItem = this.markItem.bind(this);
    this.db = new DB();
    this.state = {
         worklist: ''
    }
  }

   loadItems(){
       let postData = new FormData();
       postData.append('target_function', 'readItems');
       this.db.readItems(postData).then((data) => {
           this.setState({
               worklist: data
           });
       });
  }

  addItem(){
        this.loadItems();
   }

   markItem(itemDomId, isMark){
       let status = isMark ? null : 1;
       let newWorklist = this.state.worklist;
       newWorklist[itemDomId].is_mark = status;
       this.setState({
           worklist: newWorklist
       });
   }

   deleteItem(itemDomId){
       let newWorklist = this.state.worklist;
       delete newWorklist[itemDomId];
       this.setState({
           worklist: newWorklist
       });
   }

   componentDidMount(){
       this.loadItems();
   }

  render(){
       console.log('render');
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
                        newItem={this.addItem}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <ListBody
                        itemToDelete={this.deleteItem}
                        items={this.state.worklist}
                        itemToMark={this.markItem}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
