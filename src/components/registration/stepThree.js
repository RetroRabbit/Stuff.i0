import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { white } from 'material-ui/styles/colors';
import { Route } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import './reg.css'

class StepThree extends React.Component {

  render() {
    return (
      <div className="pageContainer">
        <div className="reg-rectangle">
          <h2 className="step-one">Last Step</h2>
          <h2 className="the-basics">YOUR FIRST CHAT</h2>

          <MuiThemeProvider>
            <div className="form-field" >
              <form>
                <br/><br/><br/><br/>
                <TextField
                  className="input"
                  hintText="Fiends' Email"
                  floatingLabelText="Friends' Email"
                  floatingLabelStyle={{ color: white }}
                />
                <br /><br/><br/><br/>
              </form>
            </div>

          </MuiThemeProvider>
          <div className="nextBox">
          <Route render={({ history }) => (
                        <FlatButton {...this.props} onClick={() => {
                            this.setState({ logged: false })
                            history.push('/Login')
                        }}
                            className="next-button"
                            label="Submit" />
                    )} />

          </div>
          <div className="skip">
          <Route render={({ history }) => (
            <p {...this.props} onClick={() => {
                this.setState({ logged: false })
                history.push('/Login')
            }}
            className="skip-for-now "
                label="Next Step" >Skip for now</p>
        )} />
          </div>
        </div>
      </div>
    );
  }
}

export default StepThree