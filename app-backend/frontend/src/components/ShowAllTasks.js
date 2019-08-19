import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function deleteTask(task) {
  console.log(`DeleteTask taskId: ${task._id}`);
  axios
    .delete(`http://localhost:3001/task/${task._id}`, {
      data: task._id
    })
    .then(() => console.log(`${task._id} successfully deleted from db`))
    // .then(() => window.location.reload())
    .catch(function(error) {
      console.log(error);
    });
  window.location.reload();
}

function markDone(task) {
  console.log(`MarkDone taskId: ${task._id}`);
  
  axios
    .put(`http://localhost:3001/task/${task._id}`, {
      done: true
  })
    .then(() => console.log(`${task._id} successfully marked done`)) // then, strikeout font on this task
    .catch(function(error) {
      console.log(error);
    });
   window.location.reload();
}

function filterByDate(tasks, filterDate) {
  console.log(tasks, filterDate);
  const filteredTasks = tasks.filter(task => {
    if (task.due <= filterDate) {
      return task
    }
  });
  return <ShowAllTasks tasks={filteredTasks} />
}


class ShowAllTasks extends Component {
  constructor() {
    super();
    this.state = { tasks: [], filterDate: '' };
  }
    componentDidMount() {
        fetch('/task')
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
    }
    
    render() {
      
      return (
        <div>
          <h2 className="ml4">Task List</h2>
          <div className="pa2">
            <input
              className="pa3 ba b--green bg-lightest-blue"
              type="Date"
              placeholder=""
              onChange={() =>
                filterByDate(this.state.tasks, this.state.Date)
              }
            />
          </div>
          {this.state.tasks.map(task => (
            <div
              className="ml3 mb2 bg-light-green shadow-5 grow mw6"
              key={task._id * 100}
            >
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

              <h2 className="ml4">{task.done ? "DONE" : ""}</h2>
              <br />
              <div className={task.done ? "strike ml4 b" : "ml4 b"}>
                Title: {task.title}
              </div>
              <br />
              <div className={task.done ? "strike ml4" : "ml4"}>
                Content: {task.content}
              </div>
              <br />
              <div className={task.done ? "strike ml4" : "ml4"}>
                {" "}
                Owner: {task.owner}
              </div>
              <div className={task.done ? "strike ml4" : "ml4"}>
                Due Date: {task.due}
              </div>
              <div className={task.done ? "strike ml4" : "ml4"}>
                ID: {task._id}
              </div>
              {/* Note: if marked done, then use strikethrough font */}
              <a href={`/` + task._id} target="_blank" rel="noopener noreferrer">
                <Button
                  className={task.done ? "strike ml4" : ""}
                  variant="outlined"
                  color="primary"
                  onClick={() => console.log("edit clicked")}
                >
                  Edit
                </Button>
              </a>
              <Button
                className="fr"
                variant="outlined"
                color="secondary"
                onClick={() => markDone(task)} // this needs to be an API call PUT /task/taskId to update the DB
              >
                Mark Done
              </Button>
              <Button
                className={task.done ? "strike fr" : "fr"}
                variant="outlined"
                color="secondary"
                onClick={() => deleteTask(task)}
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
