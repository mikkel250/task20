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
            <h4 className="ml4">Task List</h4>

            {this.state.tasks.map(task => (
              <div className="ml3 mb2 bg-light-green shadow-5 grow mw5">
                <Checkbox
                  task={task}
                  className=""
                  key={task._id}
                  value={`checkbox${task._id}`}
                  color="blue"
                  // inputProps={{
                  //   'aria-label':
                  //     `Title: ` + { task.title } '\n',
                  //     `Content: ` + { task.content } '\n'
                  //     `Owner: ` + { task.owner } '\n'
                  //   `Due Date: ` + { task.title } '\n'
                  //   `Done: ` + { task.title } '\n'
                  // }}
                />
                Title: {task.title}
                <div className="ml4">Content: {task.content}</div>
                <br />
                <div className="ml4"> Owner: {task.owner}</div>
                <br />
                <div className="ml4">Due Date: {task.due}</div>
                <br />
                {/* Note: if marked done, then use strikethrough font */}
              </div>
            ))}
          </div>
        );
    }
}


export default ShowAllTasks;
