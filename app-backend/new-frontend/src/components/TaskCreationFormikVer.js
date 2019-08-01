import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// EditUserDialog.js

//import Dialog from 'MySuperDialog';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';

class TaskCreationFormikVer extends React.Component {
  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {
    // process form submission here
    alert(JSON.stringify(values, null, 2));
    // done submitting, set submitting to false
    setSubmitting(false);

    return;
  }

  render() {

    return (
      <Formik
        initalValues={{
          title: '',
          content: '',
          owner: ''
        }}
        validate={(values) => {
          let errors = {};

          //check if values have errors
          if (!values.content)
            errors.content = "Content field cannot be empty.";
          return errors;
        }}
        onsubmit={this.handleSubmit}
        render={formProps => {
        
          return (
            <Form>
              <Field type="text" name="title" classname="textbox" />
              <ErrorMessage name="title" />
              <Field type="text" name="content" classname="textbox" />
              <ErrorMessage name='content' />
              <Field type="text" name="owner" classname="textbox" />
              <ErrorMessage name="owner" />
              
              <button type="submit" disabled={formProps.isSubmitting}>Submit Form</button>
            </Form>
          );
        }} 
        
      />);
  }
} 

export default TaskCreationFormikVer;
// 7/23 Try this: 
// https://reactjs.org/docs/forms.html#handling-multiple-inputs

// followed https://medium.com/@rossbulat/formik-for-react-introduction-to-form-management-done-right-971889b40f9f