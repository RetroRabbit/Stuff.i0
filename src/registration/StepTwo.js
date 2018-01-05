import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './StepTwo.css'

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
          <div className="space">

          </div>
            <h2 className="step-two">Step One</h2>
            <h2 className="profile-picture">PROFILE PICTURE</h2>
            <div className="oval">
              <div className="oval-2">
                <div className="plus">
                  <div className="line"></div>
                  <div className="line-copy"></div>
                </div>
              </div>
        
            </div>
            <RaisedButton label="Next Step" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            <h6 className="skip-for-now">Skip for now</h6>
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