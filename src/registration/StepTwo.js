import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import './StepTwo.css';
import './register.js';


 

const StepTwo = (props) => {

    const changeImg = (e) => {
        console.log(e.target);
        console.log(e.target.files[0]);
    
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = event => {
                props.profilephoto = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);

        }
        props.hasimg = true;    
    }
   
  const { handleSubmit } = props

  return (
      
    <div >
        <MuiThemeProvider>
            <div className="reg-rectangle">
                <br/>
                <h2 className="step-two-heading">Step Two</h2>
                <h2 className="pro-pic-heading">PROFILE PICTURE</h2>
                <br/>
                <form className="form-field" onSubmit={handleSubmit}>
                <div className="pro-pic-placeholder">

                    {!props.hasimg ? 
                        <div className="upload-circle">
                            <div className="plus-logo">
                                <div className="plus-horizontal" />
                                <div className="plus-vertical" />
                            </div>
                            <input
                                type="file"
                                onChange={e => {
                                    changeImg(e);
                                }}
                                style={inputimg}
                            />
                        </div>
                     : 
                        <img
                            src={props.profilephoto}
                            className="pro-pic-jpg"
                            alt="Profile"
                        />
                    }
                </div>
                <br/>
                <RaisedButton
                    label="Next Step"
                    primary={true}
                    type="submit" />
                <br/></form>
                <h6 className="skip-for-now">Skip for now</h6>

            </div>
        </MuiThemeProvider>
    </div>
);
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

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
 
})(StepTwo)
