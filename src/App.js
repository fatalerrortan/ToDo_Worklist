import React from 'react';
import ListInput from './ListInput';
import ListBody from './ListBody';
import DB from './backend/DB';


class App extends React.Component {

  constructor(props){
    super(props);
    this.addToList = this.addToList.bind(this);
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

  addToList() {
       this.loadItems();
   }

  render(){
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
                        newItem={this.addToList}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <ListBody
                        items={this.state.worklist}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
