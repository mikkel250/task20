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
              <div>
                <Checkbox
                  className=""
                  key={task._id}
                  value={`checkbox${task._id}`}
                  color="primary"
                  inputProps={{
                    'aria-label':
                      `Title: ` + { task.title } '\n'
                      `Content: ` + { task.content } '\n'
                      `Owner: ` + { task.owner } '\n'
                    `Due Date: ` + { task.title } '\n'
                    `Done: ` + { task.title } '\n'
                  }}
                >
                  {task.title}
                </Checkbox>
                <div className="col s6"> <Checkbox >Done</Checkbox> </div>
              </div>
            ))}
          </div>
        );
    }
}


export default ShowAllTasks;
