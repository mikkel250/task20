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

  // https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f

  //https://hackernoon.com/how-to-combine-a-nodejs-back-end-with-a-reactjs-front-end-app-ea9b24715032

  //https://www.freecodecamp.org/forum/t/how-to-submit-form-data-to-a-restful-api-in-react/163032

  // step by step CRUD for MERN
  // https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/

  // Definitely the best one so far:
  // https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61

  // This one seems to handle the events in a cleaner way but has less explanation:
  // https://www.djamware.com/post/59faec0a80aca7739224ee1f/building-crud-web-application-using-mern-stack#ch8
  // onSubmit(event, titleInput, contentInput, ownerInput) {
  //   event.preventDefault();
  //   // this.props.TaskCreationForm(this.state.title);
  //   // this.props.TaskCreationForm(this.state.content);
  //   // this.props.TaskCreationForm(this.state.owner);
  //   this.setState({
  //     title: {titleInput},
  //     content: {contentInput},
  //     owner: {ownerInput}
  //   });
  // }

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

// 7/23 Try this: 
// https://reactjs.org/docs/forms.html#handling-multiple-inputs

//https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825