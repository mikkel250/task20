import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { tasks: [] };

  componentDidMount() {
    fetch('/test')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    return (
      <div className="App">
        <h1>Tasks</h1>
        {this.state.tasks.map(test => 
          <div key={test._id}> {test.title} </div>
        )}
      </div>
    )
  }
}


export default App;
