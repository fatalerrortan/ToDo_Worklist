import React from 'react';
import ListInput from './ListInput';
import ListBody from './ListBody';
import DB from './backend/DB';


class App extends React.Component {

  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.db = new DB();
    this.state = {
      worklist: ''
    }
    this.loadItems();
  }

   async loadItems(){
      let postData = new FormData();
      postData.append('target_function', 'readItems');
      let output = await this.db.readItems(postData).then((data)=>{
          return data;
      });
       let newWorklist = output;
       this.setState({
           worklist: newWorklist
       });
  }

  addItem(){
       this.loadItems();
   }

   deleteItem(itemDomId){
       let newWorklist = this.state.worklist.slice(itemDomId,1);
       this.setState({
           worklist: newWorklist
       });
   }

  render(){
      // console.log(this.state.worklist);
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
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
