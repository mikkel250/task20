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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <h4>Tasks</h4>
        {this.state.tasks.map(test =>
          <div key={test._id} > {test.title} </div>
        )}
        <TaskCreationForm />
      </div>
    );
  }
}


export default App;
