import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm } from 'redux-form';

import './reg.css';
import { white } from 'material-ui/styles/colors';

const required = value => (value == null ? 'Required' : undefined);

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);

const StepOne = (props) => {
  const { handleSubmit } = props
  return (

    <MuiThemeProvider>
      <div className="reg-rectangle">
        <div className="space"></div>
        <h2 className="step-one">Step One</h2>
        <h2 className="the-basics">THE BASICS</h2>
        <form className="form-field" onSubmit={handleSubmit}>
          <div>
          <TextField
            className="input"
            type="text"
            hintText="Enter your Name"
            floatingLabelText="Your Name"
            floatingLabelStyle={{color:white}}
            validate={required}
          />
          <br />
          <TextField
            className="input"
            type="email"
            hintText="Enter your Email"
            floatingLabelText="Email"
            floatingLabelStyle={{color:white}}
            validate={[required, email]}
            
          //onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <br />
          <TextField
            className="input"
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            floatingLabelStyle={{color:white}}
          //onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          </div>

          
          <br />
          

          <RaisedButton
            label="Next Step"
            primary={true}
            type="submit" />
        </form>
      </div>
    </MuiThemeProvider>

  )
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
 
})(StepOne)