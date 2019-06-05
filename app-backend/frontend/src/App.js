import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TaskCreationForm from './components/TaskCreationForm';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  state = { tasks: [] };

  componentDidMount() {
    fetch('/task')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <BrowserRouter>
        <h4>Tasks</h4>
        {this.state.tasks.map(task =>
          <div key={task._id} > {task.title} </div>
        )}
          <TaskCreationForm />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
