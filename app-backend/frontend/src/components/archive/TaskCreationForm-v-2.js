import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


const fields = {
    title: 'Title',
    content: 'Content',
    owner: 'Owner',
    done: 'Done'
}

const CreateTaskButton = () => <button className="btn waves-effect waves-light" name="submit">Submit<i className="material-icons">send</i></button>;

class FieldInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [fields]: event.target.value });
    }

    render() {
        const userInput = this.props.userInput;
        const field = this.props.field;  //change to this.props.name?
        return (
            <label>
                <legend>{fields[field]}:</legend>
                <input value={userInput}
                    onChange={this.handleChange} />
            </label>
        )
    }
}



class TaskCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      content: "Content",
      owner: "Owner"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    
  }

  handleSubmit(event) {
    alert(`Task added: ${this.state.value}`);
    event.preventDefault();
  }


  render() {
    const titleInput = this.state.titleInput;
    const contentInput = this.state.contentInput;
    const ownerInput = this.state.ownerInput;

    return (
      <BrowserRouter>
        <div className="row">
          <div className="col s7" justify="flex-end">
            <form name="newTask" onSubmit={this.onSubmit}>
              <h3>Create new Task:</h3>
              <br />
              <FieldInput
                field="title"
                userInput={titleInput}
                onfieldChange={this.handleTitleChange}
              />
              <FieldInput
                field="content"
                userInput={contentInput}
                onfieldChange={this.handleContentChange}
              />
              <FieldInput
                field="owner"
                userInput={ownerInput}
                onfieldChange={this.handleOwnerChange}
              />
              <br />
              <button
                className="btn waves-effect waves-light"
                size="large"
                type="submit"
                value="Submit"
              >
                <i className="material-icons" pl={1}>
                  send
                </i>
              </button>
            </form>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

//PropTypes
TaskCreationForm.propTypes = {
    TaskCreationForm: PropTypes.func.isRequired
}

export default TaskCreationForm;
