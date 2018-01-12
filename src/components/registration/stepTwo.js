import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import './reg.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    getUser,
    changeUser,
    getCurrentUser,
    registerUser,
    loginUser
} from '../../reducers/Account';

import { addMsg, getMsgs, getChats } from '../../reducers/Chat';

class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    changeImg = e => {
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
    };
    state = {
        profilephoto: '',
        hasimg: false
    };

    saveImg = () => {
        this.props.changeUser({ userImg: this.state.profilephoto });

        this.props.getCurrentUser();
        this.forceUpdate();
    };

    render() {
        return (
            <div className="pageContainer">
                <div className="regRectangle">
                    <h2 className="stepHeading">Step Two</h2>
                    <h2 className="titleHeading">PROFILE PICTURE</h2>
                    <MuiThemeProvider>
                        <div className="proPicPlaceholder">
                            {!this.state.hasimg ? (
                                <div className="uploadCircle">
                                    <div className="plusLogo">
                                        <div className="plusHorizontal" />
                                        <div className="plusVertical" />
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
                                    className="proPicJpg"
                                    alt="Profile"
                                />
                            )}
                        </div>
                    </MuiThemeProvider>
                    <div className="nextBox">
                        <Route
                            render={({ history }) => (
                                <FlatButton
                                    {...this.props}
                                    onClick={() => {
                                        this.saveImg();
                                        history.push('/StepThree');
                                    }}
                                    className="nextButton"
                                    label="Next Step"
                                />
                            )}
                        />
                    </div>
                    <div className="skip2">
                        <Route
                            render={({ history }) => (
                                <p
                                    {...this.props}
                                    onClick={() => {
                                        this.setState({ logged: false });
                                        history.push('/StepThree');
                                    }}
                                    className="skipForNow "
                                    label="Next Step"
                                >
                                    Skip for now
                                </p>
                            )}
                        />
                    </div>
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
const mapStateToProps = state => ({
    chats: state.Chat.chats,
    msgs: state.Chat.msgs,
    currentUser: state.Account.currentUser,
    users: state.Account.users
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUser,
            getCurrentUser,
            changeUser,
            addMsg,
            getMsgs,
            registerUser,
            loginUser,
            getChats
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
