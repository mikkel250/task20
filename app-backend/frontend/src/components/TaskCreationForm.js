import React from 'react';

const fields = {
    title: 'Title',
    content: 'Content',
    owner: 'Owner',
    done: 'Done'
}

// Base field will always be dollars
// function toRand(usd) {
//     return (usd * 14.7);
// }


// function toPound(usd) {
//     return (usd * 0.8);
// }

// function toEuro(usd) {
//     return (usd * 0.9);
// }

// you pass in the appropriate function for the convert arg, e.g. convertUsd(25, toPound)
// function convertUsd(usd, convert) {
//     const input = parseFloat(usd);
//     if (Number.isNaN(input)) {
//         return "";
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }

class FieldInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onfieldChange(e.target.value);
    }

    render() {
        const userInput = this.props.userInput;
        const field = this.props.field;
        return (
            <fieldset>
                <legend>{fields[field]}:</legend>
                <input value={userInput}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class TaskCreationForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleDoneChange = this.handleDoneChange.bind(this);
        this.state = {userInput: "", field: 'usd'}
    }

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
            <div>
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
                    onfieldChange={this.handleDoneChange} />
            </div>
        );

    }
}

export default TaskCreationForm;