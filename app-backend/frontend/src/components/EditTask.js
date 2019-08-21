import React, { Component } from 'react';
import axios from "axios";



class EditTask extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.title, props.content, props.due, props.owner);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const thisTaskId = this.props.taskIdToEdit;
    fetch(`/task/${thisTaskId}`)
      .then(res => res.json())
      .then(console.log(`ComponentDidMount running. taskID: ${JSON.stringify(thisTaskId)}`))
    // .then(tasks => this.setState({ tasks }));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    // get our form data out of state
    const { title, content, owner, due, done } = this.state;

    // use axios to post data to the database
    axios
      .put("http://localhost:3001/task", {
        title,
        content,
        owner,
        due,
        done
      })
      // see here to clear form and add success msg https://stackoverflow.com/questions/54257943/clearing-forms-in-react-after-submission
      .then(function (response) {
        let successMessage = document.querySelector(".success-message");
        successMessage.textContent =
          `Task updated!` + `\n ` + JSON.stringify(response.data);
        successMessage.className = "bg-green mw5 ma-2";
      })
      .catch(function (error) {
        let successMessage = document.querySelector(".success-message");
        successMessage.textContent = JSON.stringify(error);
      });

    //   event.preventDefault();
    //   this.setState({
    //     title: "",
    //     content: "",
    //     owner: "",
    //     due: "",
    //     done: false
    //   });
     };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h3 className="ma3">Edit Task:</h3>
          <br />
          <h3>{this.state.message}</h3>
          <br />
          <label className="ma3">
            Title:
          <input
              className="ma3"
              type="text"
              name="title"
              value={this.props.title}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className="ma3">
            Content:
          <input
              className="ma3"
              type="text"
              name="content"
              value={this.props.content}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className="ma3">
            Owner:
          <input
              className="ma3"
              type="text"
              name="owner"
              value={this.props.owner}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className="ma3">
            Due Date:
          <input
              className="ma3"
              type="Date"
              name="due"
              value={this.props.due}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" className="ml3" />
          <div className="success-message">
            <label />
          </div>
        </form>
      );
    }
  }

export default EditTask;