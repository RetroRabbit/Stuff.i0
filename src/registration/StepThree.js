import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './reg.css'
import './register'

const StepThree = (props) => {
  const { handleSubmit } = props
  return (
      <MuiThemeProvider>
      <div className="reg-rectangle">
      <h2 className="step-one">Last Step</h2>
          <h2 className="the-basics">YOUR FIRST CHAT</h2>
      <form className="form-field" onSubmit={handleSubmit}>
      <TextField
      hintText="Fiends' Email"
      floatingLabelText="Fiends' Email"
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
        
        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
        </form>
    </div>
      </MuiThemeProvider>
  );

}

const style = {
  margin: 15,
};
export default reduxForm({
  form: 'wizard',              // <------ same form name
   destroyOnUnmount: false,     // <------ preserve form data
 })(StepThree)

