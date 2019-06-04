import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TaskCreationForm from './components/TaskCreationForm';

class App extends Component {
  state = { tasks: [] };

 /* componentDidMount() {
    fetch('/test')
      .then(res => res.text())
      .then(tasks => this.setState({ tasks }));
  }
*/
  render() {
    return (
      <div className="App">
        <h1>Tasks</h1>
        {this.state.tasks.map(test =>
          <div key={test._id} > {test.title} </div>
        )}
        <h3>Create new task</h3>
        <TaskCreationForm />
      </div>
    );
  }
}


export default App;
