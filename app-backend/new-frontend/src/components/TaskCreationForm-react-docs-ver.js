import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


const fields = {
    title: 'Title',
    content: 'Content',
    owner: 'Owner',
    done: 'Done'
}

class TaskCreationFormReactDocsVer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A form was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h3>Create new Task:</h3>
        <label>
          Title:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
            </label>
            <label>
          Content:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
            </label>
            <label>
          Owner:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//PropTypes
TaskCreationFormReactDocsVer.propTypes = {
    TaskCreationFormReactDocsVer: PropTypes.func.isRequired
}

export default TaskCreationFormReactDocsVer;

// 7/23 Try this: 
// https://reactjs.org/docs/forms.html#handling-multiple-inputs