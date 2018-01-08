import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form'
import './reg.css';

const StepOne = (props) => {
  const { handleSubmit } = props
  return (
    <MuiThemeProvider>
    <div className="reg-rectangle">
      <h2 className="step-one">Step One</h2>
      <h2 className="the-basics">THE BASICS</h2>
      <form className="form-field" onSubmit={handleSubmit}>
        <TextField
          type="text"
          hintText="Enter your Name"
          floatingLabelText="Your Name"
          onChange={(event, newValue) => this.setState({ username: newValue })}
        />
        <br />
        <TextField
          type="email"
          hintText="Enter your Email"
          floatingLabelText="Email"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        
        <RaisedButton label="Next Step" primary={true}  type="submit"/>
      </form>
    </div>
  </MuiThemeProvider>
  ) 
}

export default reduxForm({
 form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
})(StepOne)