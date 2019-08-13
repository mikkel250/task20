import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Checkbox from './Checkbox';


class FilterTasks extends Component {
    state = { tasks: [], checkboxes: []};

    componentDidMount() {
        fetch('/task')
            .then(res => res.json())
            .then((tasks, checkboxes) => this.setState({ tasks, checkboxes }));
    }
    
    render() {
        return (
          <div className="row">
            <div className="col s5">
              <h4>Task List</h4>
              {this.state.tasks.map(task => (
                <div key={task._id}> {task.title}</div>
              ))}{" "}
              {this.state.checkboxes.map(checkbox => (
                <label key={checkbox._id}><Checkbox /></label>
              ))}
            </div>
          </div>
        );
    }
}


export default FilterTasks;
