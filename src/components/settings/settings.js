import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';

import { Route } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderNav from '../headerNav/headerNav';

import '../headerNav/headerNav.css';

import {
    getUser,
    changeUser,
    getCurrentUser,
    registerUser,
    loginUser,
    logOut
} from '../../reducers/Account';

import { addMsg, getMsgs, getChats } from '../../reducers/Chat';

const styles = {
    gridList: {
        width: '100%',
        overflowX: 'auto'
    }
};

class settings extends Component {
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
        this.props.changeUser({ userImg: this.state.profilephoto });

        this.props.getCurrentUser();
        this.forceUpdate();
    };

    constructor(props) {
        super(props);
        props.getCurrentUser();
        try {
            props.getCurrentUser();
            var id = props.currentUser.userID;
        } catch (exc) {
            window.location.href = '/';
        }
    }

    saveChanges() {
        this.props.changeUser({
            userName: this.state.user.name,
            userSurname: this.state.user.surname
        });

        this.forceUpdate();
        this.props.getCurrentUser();
    }

    state = {
        editingEmail: false,
        editingNames: false,
        profilephoto: '',
        user: '',
        hasimg: true
    };

    render() {
        return (
            <div>
                <HeaderNav
                    pic={this.props.currentUser.userImg}
                    surname={this.props.currentUser.userSurname}
                    name={this.props.currentUser.userName}
                    {...this.props}
                />
                <GridList cols={1} cellHeight={80} style={styles.gridList}>
                    <GridTile className="text-center" cols={1} rows={4}>
                        <div className="proImgPlaceholder">
                            <div>
                                <img
                                    src={this.props.currentUser.userImg}
                                    className="proImg"
                                    alt="Profile"
                                />
                                <input
                                    type="file"
                                    onChange={e => {
                                        this.changeImg(e);
                                    }}
                                    style={inputimg}
                                />
                            </div>
                        </div>

                        {/* <div className="proImgPlaceholder">
         <img className="proImg"
             src={this.props.currentUser.userImg}/>
            </div> */}
                    </GridTile>

                    <GridTile className="text-center" cols={1} rows={1}>
                        <div>
                            {this.state.editingNames ? (
                                <div>
                                    <TextField
                                        onChange={e => {
                                            var newSelected = this.props.currentUser;
                                            newSelected.surname = e.target.value.split(' ')[0];
                                            newSelected.name = e.target.value.split(' ')[1];
                                            this.setState({ user: newSelected });
                                        }}
                                        hintText="Surname Name"
                                    />
                                    <IconButton
                                        onClick={() => {
                                            this.saveChanges();
                                            this.setState({ editingNames: false });
                                        }}
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}
                                    >
                                        <ActionDone />
                                    </IconButton>
                                </div>
                            ) : (
                                <div>
                                    <label className="userTitleText">
                                        {this.props.currentUser.userSurname}{' '}
                                        {this.props.currentUser.userName}
                                    </label>
                                    <label className="nameLbl">
                                        {this.props.currentUser.userName}{' '}
                                        {this.props.currentUser.userSurname}
                                    </label>

                                    <IconButton
                                        onClick={() => {
                                            this.setState({ editingNames: true });
                                        }}
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}
                                    >
                                        <EditorModeEdit />
                                    </IconButton>
                                </div>
                            )}
                        </div>
                    </GridTile>

                    <GridTile className="text-center" cols={1} rows={1}>
                        <div>
                            {this.state.editingEmail ? (
                                <div>
                                    <TextField
                                        onChange={e => {
                                            var newSelected = this.props.currentUser;
                                            newSelected.email = e.target.value;
                                            this.setState({ user: newSelected });
                                        }}
                                        hintText="Email Address"
                                    />
                                    <IconButton
                                        onClick={() => {
                                            this.saveChanges();
                                            this.setState({ editingEmail: false });
                                        }}
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}
                                    >
                                        <ActionDone />
                                    </IconButton>
                                </div>
                            ) : (
                                <div>
                                    <label className="userTitleText">
                                        {this.props.currentUser.userEmail}
                                    </label>
                                    <IconButton
                                        onClick={() => {
                                            this.setState({ editingEmail: true });
                                        }}
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}
                                    >
                                        <EditorModeEdit />
                                    </IconButton>
                                </div>
                            )}
                        </div>
                    </GridTile>

                    <GridTile className="text-center" cols={1} rows={2}>
                        <Route
                            render={({ history }) => (
                                <div
                                    className="doneBtn"
                                    onClick={() => {
                                        history.push('/accountScreen');
                                    }}
                                    label="Done"
                                    secondary={true}
                                >
                                    <label className="doneLbl">DONE</label>
                                </div>
                            )}
                        />
                    </GridTile>
                </GridList>
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

const mapStateToProps = state => {
    return {
        chats: state.Chat.chats,
        msgs: state.Chat.msgs,
        currentUser: state.Account.currentUser,
        users: state.Account.users,
        receiver: state.Account.receiver
    };
};

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
            getChats,
            logOut
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(settings);
