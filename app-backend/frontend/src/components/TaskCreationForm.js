import React from 'react';

const fields = {
    title: 'Title',
    content: 'Content',
    owner: 'Owner',
    done: 'Done'
}

class FieldInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.value]: event.target.value });
    }

    render() {
        const userInput = this.props.userInput;
        const field = this.props.field;
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
    handleSubmit(event) {        
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/task', {
            method: 'POST',
            body: data,
        });
    }

    /* below should not be necessary using the handleChange syntax above
    handleTitleChange(userInput) {
        this.setState({ field: 'title', userInput });
    }

    handleContentChange(userInput) {
        this.setState({ field: 'content', userInput });
    }

    handleOwnerChange(userInput) {
        this.setState({ field: 'owner', userInput });
    }

    handleDoneChange(userInput) {
        this.setState({ field: 'done', userInput });
    }
    */
    
    render() {
        const titleInput = this.state.titleInput;
        const contentInput = this.state.contentInput;
        const ownerInput = this.state.ownerInput;
        const doneInput = this.state.doneInput;
        // Dont need to convert
        // const rand = convertUsd(userInput, toRand);
        // const gbp = convertUsd(userInput, toPound);
        // const eur = convertUsd(userInput, toEuro);

        return (
            <div className="row">
                <form name="newTask" className="col s3" onSubmit={this.handleSubmit}><h6>Create new Task:</h6><br /> 
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
                    <FieldInput
                        field="done"
                        userInput={doneInput}
                        onfieldChange={this.handleDoneChange} /><br />
                    <button className="btn waves-effect waves-light" name="submit">Submit<i className="material-icons right">>></i>
                    </button>
                </form>
            </div>
        );

    }
}

export default TaskCreationForm;