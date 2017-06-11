import React from 'react';
import ListInput from './ListInput';
import ListBody from './ListBody';
import DB from './backend/DB';

class App extends React.Component {

  constructor(props){
    super(props);
    this.addToList = this.addToList.bind(this);
    this.db = new DB();

      // this.loadItems().then((data) => {
      //      this.worklist = data;
      // });
      //
      // this.worklist = this.loadItems();
      // console.log(this.worklist);

    this.state = {
      worklist: ['test first input', 'test 2 test 2'],
      worklist_test: ''
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
       // console.log(newWorklist);
       this.setState({
           worklist_test: newWorklist
       });
  }

  addToList(item) {
      let newWorklist = this.state.worklist;
      newWorklist.push(item);
      // console.log(newWorklist);
      this.setState({
          worklist: newWorklist
      });
  }

  render(){
       // this.loadItems();
      console.log(this.state);
    return(
        <div>
            <ListInput
                newItem={this.addToList}
            />
            <ListBody
                items={this.state.worklist}
                test={this.state.worklist_test}
             />
        </div>
    );
  }
}

export default App;
