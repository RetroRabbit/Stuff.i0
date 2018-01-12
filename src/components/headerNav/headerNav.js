import './headerNav.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import FlatButton from 'material-ui/FlatButton/FlatButton';

import TextField from 'material-ui/TextField';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import { getUser, changeUser, getCurrentUser, registerUser, loginUser ,logOut} from '../../reducers/Account';

import { addMsg, getMsgs, getChats } from '../../reducers/Chat';


class HeaderNav extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        try {
            props.getCurrentUser();
        } catch (exc) {
            window.location.href = '/';
        }
    }

    state = {
      open:false,
      txtSearch:''
    }

    handleChange = (event, logged) => {
        this.setState({ logged: logged });
    };

    changePage(value) {
        push('/' + value);
    }

    styles = {
        'padding-bottom': '2px'
    };


render() {
        return (
            <div class="navBar">
                <Route
                    render={({ history }) => (
                        <div
                            class="newChat initial"
                            onMouseEnter={(e) =>{
                                this.setState({ open: true })
                            }}
                            onClick={() => {
                                history.push('/accountScreen');
                            }}
                        >
                            <label className="newGroupLbl">NEW CHAT</label>
                        </div>
                    )}
                />

                    
                              <Popover
                                open={this.state.open}
                                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                onRequestClose={this.handleRequestClose}>
                                  <Card>
                                      <CardTitle title="Search for a user"/>
                                      <CardText>
                                        <div>
                                          <FlatButton label="X" onClick={(e)=>{ this.setState({ open: false })}}>

                                          </FlatButton>
                                        </div>
                                        <TextField
                                            hintText="Friend's Email"
                                            onKeyDown={e => {
                                                if (e.key === 'Enter' && e.target.value.length > 0) {
                                                    e.target.value = '';
                                                }
                                                this.setState({txtSearch : e.target.value});

                                            }}
                                            style={{
                                                padding: '1px 0px 1px 25px',
                                                width: '100%'
                                            }}
                                        />
                                      </CardText>
                                    </Card>
                                    <List>
                                      <Subheader>Users that contains : { this.state.txtSearch } </Subheader>
                                      <Route render={({ history }) => (
                                           this.props.users.map(user =>(
                                              (user.userEmail.indexOf(this.state.txtSearch) !== -1) ||
                                              (user.userSurname.indexOf(this.state.txtSearch) !== -1) ||
                                              (user.userName.indexOf(this.state.txtSearch) !== -1) ?

                                                      <ListItem
                                                        leftAvatar={
                                                          <Avatar src={ user.userImg } />
                                                        }
                                                        primaryText={ user.userSurname + " " + user.userName}
                                                        secondaryText={ user.userEmail }
                                                        onClick={(e)=>{
                                                          let found = false;
                                                          for(let i=0;i<this.props.msgs.length;i++){
                                                            if(this.props.msgs[i].senderID === this.props.currentUser.userID && this.props.msgs[i].receiverID === user.userID ||
                                                               this.props.msgs[i].receiverID === this.props.currentUser.userID && this.props.msgs[i].senderID === user.userID){
                                                              found = true;
                                                            }
                                                          }
                                                          if(!found){
                                                            this.props.addMsg("Hi",this.props.currentUser.userID,user.userID);
                                                          }
                                                          history.push('/accountScreen');
                                                          this.setState({open:false});
                                                        }}
                                                      />
                                          :

                                          <p></p>

                                          ))
                                      )} />
                                     </List>
                              </Popover>

                    
                <div className="newChat initial" primary={true} onClick={() => {}}>
                    <label className="newGroupLbl">NEW GROUP</label>
                </div>
                <div class="auto" />

                <div class="test initial">
                    {this.props.getCurrentUser ? (
                        <label className="nameLbl">
                            {this.props.name} {this.props.surname}
                        </label>
                    ) : (
                        <label className="nameLbl">No Logged in</label>
                    )}
                </div>
                <div class="test initial">
                    <IconMenu
                        className="miniImgPlaceholder"
                        iconButtonElement={
                            <IconButton className="miniProImage">
                                <img className="miniProImage" src={this.props.pic} alt=" " />
                            </IconButton>
                        }
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                        <Route
                            render={({ history }) => (
                                <MenuItem
                                    primaryText="Settings"
                                    onClick={() => {
                                        history.push('/settings');
                                    }}
                                />
                            )}
                        />
                        <Route
                            render={({ history }) => (
                                <MenuItem
                                    primaryText="Log out"
                                    onClick={() => {
                                        this.props.logOut();
                                        history.push('/');
                                    }}
                                />
                            )}
                        />
                    </IconMenu>
                </div>
                <div className="test initial">
                    <img
                        className="logoImg "
                        src="https://files.slack.com/files-pri/T02LJS8M9-F8Q87RMGD/icon.png"
                        alt=""
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state =>
{
  return {
    chats: state.Chat.chats,
    msgs: state.Chat.msgs,
    currentUser: state.Account.currentUser,
    users: state.Account.users,
    receiver: state.Account.receiver
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getUser,
    getCurrentUser,
    changeUser,
    addMsg,
    getMsgs,
    registerUser,
    loginUser,
    getChats,
    logOut
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);