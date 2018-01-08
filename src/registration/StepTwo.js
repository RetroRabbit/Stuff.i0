import React from 'react';
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
