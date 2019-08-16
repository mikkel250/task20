import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function deleteTask(task_id) {
  axios
    .delete("http://localhost:3001/task/delete", {
      data: task_id
    })
    .then(() => console.log(`${task_id} successfully deleted from db`))
    .catch(function(error) {
      console.log(error);
    });

}

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
              <div className="ml3 mb2 bg-light-green shadow-5 grow mw6"key={task._id * 100}>
                {/* <Checkbox
                  task={task}
                  className=""
                  key={task._id}
                  value={`checkbox${task._id}`}
                  color="blue"
                  inputProps={{
                    'aria-label':
                      
                  }}
                /> */}
                Title: {task.title}
                <div className="ml4">Content: {task.content}</div>
                <br />
                <div className="ml4"> Owner: {task.owner}</div>
                <br />
                <div className="ml4">Due Date: {task.due}</div>
                <br />
                {/* Note: if marked done, then use strikethrough font */}
                <Button
                  
                  className=""
                  variant="outlined"
                  color="primary"
                  onClick={() => console.log('edit clicked')}
                >
                  Edit
                </Button>
                <Button
                  
                  className="fr"
                  variant="outlined"
                  color="secondary"
                  onClick={() => task.done=true}
                >
                  Mark Done
                </Button>
                <Button
                  
                  className="fr"
                  variant="outlined"
                  color="secondary"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        );
    }
}


export default ShowAllTasks;
