import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTask extends Component {
  state = {
      title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value});


  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit } style={{ display: 'flex' }}>
            <input type="text" name="title" placeholder="Add Task ..." style={{ flex: '10', padding: '5px' }} 
            value={ this.state.title }
            onChange={ this.onChange } />
            <input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
        </form>
      </div>
    )
  }
}


// PropTypes
AddTask.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default AddTask;
