import React from 'react';
import { reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import { Route, Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import './reg.css'

class StepThree extends React.Component {

  render() {
    return (
      <div className="reg-rectangle">
        <h2 className="step-one">Last Step</h2>
        <h2 className="the-basics">YOUR FIRST CHAT</h2>

        <MuiThemeProvider>
          <div className="form-field" >
            <TextField
              hintText="Fiends' Email"
              floatingLabelText="Friends' Email"
              floatingLabelStyle={{ color: white }}
            />
            <br />

          </div>

        </MuiThemeProvider>
        <div className="nextBox">
        <Route render={({ history }) => (
          <FlatButton {...this.props} onClick={() => {
            this.setState({ logged: false })
            history.push('/')
          }}
            className="next-button"
            label="Next Step" />
        )} />
        </div>

      </div>
    );
  }
}
const inputimg = {
  opacity: 0,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%'
};
export default StepThree


