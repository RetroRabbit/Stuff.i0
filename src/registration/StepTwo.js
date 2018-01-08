import React from 'react';
import {reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './reg.css'
import './register'

const StepTwo = (props) => {
  const { handleSubmit } = props
  return (
      <MuiThemeProvider>
      <div className="reg-rectangle">
      <h2 className="step-one">Step One</h2>
      <h2 className="the-basics">THE BASICS</h2>
      <form className="form-field" onSubmit={handleSubmit}>       
        <RaisedButton label="Next Step" primary={true}  type="submit"/>
      </form>
    </div>
       
      </MuiThemeProvider>
  );

}

export default reduxForm({
  form: 'wizard',              // <------ same form name
   destroyOnUnmount: false,     // <------ preserve form data
 })(StepTwo)

