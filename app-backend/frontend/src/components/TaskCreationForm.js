import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
            title: 'Title',
            content: 'Content',
            owner: 'Owner',
            done: 'Done'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
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
    handleSubmit(event) {        
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/task', {
            method: 'POST',
            body: data,
        });
    }
   
    render() {
        const titleInput = this.state.titleInput;
        const contentInput = this.state.contentInput;
        const ownerInput = this.state.ownerInput;

        return (
            <BrowserRouter>
                          
                <form name="newTask" onSubmit={this.handleSubmit}><h6>Create new Task:</h6><br /> 
                    <FieldInput
                        field="title"
                        userInput={titleInput}
                        onfieldChange={this.handleTitleChange} />
                    <FieldInput
                        field="content"
                        userInput={contentInput}
                        onfieldChange={this.handleContentChange} />
                    <FieldInput
                        field="owner"
                        userInput={ownerInput}
                        onfieldChange={this.handleOwnerChange} />
                    <br />
                    <button className="btn waves-effect waves-light" size="large" name="submit"><i className="material-icons" pl={1}>send</i></button>
                </form>
            
            </BrowserRouter>
        );

    }
}

export default TaskCreationForm;