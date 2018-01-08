import React from 'react';
<<<<<<< HEAD
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './StepTwo.css';

class Register2 extends React.Component {
    state = {
        profilephoto: '',
        hasimg: false
    };

    changeImg(e) {
        console.log(e.target);
        console.log(e.target.files[0]);

        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = event => {
                this.setState({ profilephoto: event.target.result });
            };
            reader.readAsDataURL(e.target.files[0]);
        }

        this.setState({ hasimg: true });
    }

    render() {
        return (
            <div className="background">
                <MuiThemeProvider>
                    <div className="reg-rectangle">
                        <br/>
                        <h2 className="step-two-heading">Step Two</h2>
                        <h2 className="pro-pic-heading">PROFILE PICTURE</h2>
                        <br/>
                        <div className="pro-pic-placeholder">
                            {!this.state.hasimg ? (
                                <div className="upload-circle">
                                    <div className="plus-logo">
                                        <div className="plus-horizontal" />
                                        <div className="plus-vertical" />
                                    </div>
                                    <input
                                        type="file"
                                        onChange={e => {
                                            this.changeImg(e);
                                        }}
                                        style={inputimg}
                                    />
                                </div>
                            ) : (
                                <img
                                    src={this.state.profilephoto}
                                    className="pro-pic-jpg"
                                    alt="Profile"
                                />
                            )}
                        </div>
                        <br/>
                        <div
                            className="next-step-btn"
                            onClick={event => this.handleClick(event)}>
                            <h2 className="next-step-lbl">NEXT STEP</h2>
                        </div>
                        <br/>
                        <h6 className="skip-for-now">Skip for now</h6>
                    </div>
                </MuiThemeProvider>
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

export default Register2;
=======
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

>>>>>>> 60c81d4e6ddb5c7273d7808f4bbb351b04c5b7f0
