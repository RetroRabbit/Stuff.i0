import React from 'react';
import { reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import './reg.css'
import './register'

const StepThree = (props) => {
  const { handleSubmit } = props
  return (
    <MuiThemeProvider>
      <div className="reg-rectangle">
      <div className="space"></div>
        <h2 className="step-one">Last Step</h2>
        <h2 className="the-basics">YOUR FIRST CHAT</h2>
        <form className="form-field" onSubmit={handleSubmit}>
          <TextField
            hintText="Fiends' Email"
            floatingLabelText="Friends' Email"
            floatingLabelStyle={{color:white}}
          />
          <br />
          <RaisedButton label="Submit" primary={true} type="submit" />
        </form>
      </div>
    </MuiThemeProvider>
  );

}
export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
})(StepThree)

