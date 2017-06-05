import React from 'react';
import ListInput from './ListInput';
import ListBody from './ListBody';

class App extends React.Component {

  constructor(props){
    super(props);
    this.addToList = this.addToList.bind(this);
    this.state = {
      worklist: ['test first input', 'test 2 test 2']
    }
  }

  addToList(item) {
      // this.state.worklist.push(item);
      let newWorklist = this.state.worklist;
      newWorklist.push(item);
      // console.log(newWorklist);
      this.setState({
          worklist: newWorklist
      });
  }

  render(){
    return(
        <div>
          <ListBody
            items={this.state.worklist}
          />
          <ListInput
            newItem={this.addToList}
          />
        </div>
    );
  }
}

export default App;
