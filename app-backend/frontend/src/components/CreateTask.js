import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';


class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      owner: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit = (event) => {
    event.preventDefault();

    // get our form data out of state
    const { title, content, owner, due, message } = this.state;

    // use axios to post data to the database
    axios
      .post("http://localhost:3001/task", {
        title,
        content,
        owner,
        due
      })
      //.then(res => this.setState({title: {title}, content: {content}, owner: {owner} }))
      .then(res => {
        // see here to clear form and add success msg https://stackoverflow.com/questions/54257943/clearing-forms-in-react-after-submission
        if (res.data.msg === "success") { 
          this.setState({ message: "Task added!"})
        }
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3 className="ma3">Create new Task:</h3>
        <br />
        <h3>{this.state.message}</h3>
        <br />
        <label className="ma3">
          Title:
          <input
            className="ma3"
            type="text"
            name="title"
            value={this.state.title}
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
            value={this.state.content}
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
            value={this.state.owner}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label className="ma3">
          Due Date:
          <input
            className="ma3"
            type="date"
            name="due"
            value={this.state.due}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default CreateTask;

