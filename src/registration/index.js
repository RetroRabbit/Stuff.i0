import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './reg.css'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="space">

            </div>
          <div className="rectangle">
            <h2 className="step-one">Step One</h2>
            <h2 className="the-basics">THE BASICS</h2>
            <div className="form-field">
              <TextField
                hintText="Enter your Name"
                floatingLabelText="Your Name"
                onChange={(event, newValue) => this.setState({ username: newValue })}
              />
              <br />
              <TextField
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
              <RaisedButton label="Next Step" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;

