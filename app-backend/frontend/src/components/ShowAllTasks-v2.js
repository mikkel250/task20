import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Checkbox from "@material-ui/core/Checkbox";


class ShowAllTasks extends Component {
    state = { tasks: [] };

    componentDidMount() {
        fetch('/task')
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
    }
    
    render() {
        return (
          <div>
            <h4>Task List</h4>

            {this.state.tasks.map(task => (
              <div className="row">
                <div className="col s6" key={task._id}>
                  {task.title}
                </div>
                <div className="col s6"> <Checkbox >Done</Checkbox> </div>
              </div>
            ))}
          </div>
        );
    }
}


export default ShowAllTasks;
