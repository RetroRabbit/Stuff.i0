import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { reduxForm } from 'redux-form';
import { Route } from 'react-router-dom'

import './reg.css';
import { white } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton/FlatButton';

class StepOne extends React.Component {

  render() {
    return (
      <div className="reg-rectangle">
        <h2 className="step-one">Step One</h2>
        <h2 className="the-basics">THE BASICS</h2>
        <MuiThemeProvider>
          <div className="form-field" >
            
              <TextField
                className="input"
                type="text"
                hintText="Enter your Name"
                floatingLabelText="Your Name"
                floatingLabelStyle={{ color: white }}
              />
              <br />
              <TextField
                className="input"
                type="email"
                hintText="Enter your Email"
                floatingLabelText="Email"
                floatingLabelStyle={{ color: white }}
                onChange={(event, newValue) => this.setState({ password: newValue })}
              />
              <br />
              <TextField
                className="input"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                floatingLabelStyle={{ color: white }}
                onChange={(event, newValue) => this.setState({ password: newValue })}
              />
           
           

          </div>
        </MuiThemeProvider>
        <div className="nextBox">
        <Route render={({ history }) => (
          <FlatButton {...this.props}
            onClick={() => {
              this.setState({ logged: false })
              history.push('/StepTwo')
            }}
            className="next-button"
            label="Next Step" />
        )} />
        </div>
      </div>
    )
  }

}
export default StepOne