import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class ShowAllTasks extends Component {
    state = { tasks: [] };

    componentDidMount() {
        fetch('/task')
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
    }
    
    render() {
        return (
          <div className="row">
            <div className="col s5">
              <h4 className="ml5">Task List</h4>
              {this.state.tasks.map(task => (
                <div
                  className="ml5 mb2 bg-light-green shadow-5 grow mw5"
                  key={task._id}
                >
                  {" "}
                  {task.title}{" "}
                </div>
              ))}
            </div>
          </div>
        );
    }
}


export default ShowAllTasks;
