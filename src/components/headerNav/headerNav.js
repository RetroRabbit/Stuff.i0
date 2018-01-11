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

import FlatButton from 'material-ui/FlatButton/FlatButton';

import TextField from 'material-ui/TextField';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import { getUser, changeUser, getCurrentUser, registerUser, loginUser ,logOut} from '../../reducers/Account';

import { addMsg, getMsgs, getChats } from '../../reducers/Chat';


class HeaderNav extends Component {

    constructor(props){
      super(props);
      this.props = props;
    }

    state = {
      open:false
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
                <div className="navBar">
                    <div>
                      <Route render={({ history }) => (
                        <div className="newChat" primary={true} onMouseEnter={(e) =>{
                            this.setState({ open: true })
                          }} onClick={() => { history.push('/accountScreen')}}>
                            <label className="newChatLbl"> NEW CHAT </label>
                        </div>
                      )} />

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
                                            }}
                                            style={{
                                                padding: '1px 0px 1px 25px',
                                                width: '100%'
                                            }}
                                        />
                                      </CardText>
                                    </Card>
                              </Popover>

                        <div className="newGroup" primary={true} onClick={() => {}}>
                            <label className="newGroupLbl"> NEW GROUP </label>
                        </div>
                    </div>

                    {
                      this.props.getCurrentUser ?(
                      <label className="nameLbl">{ this.props.name } { this.props.surname }</label>)
                      :
                      (<label className="nameLbl">No Logged in</label>)
                    }

                    {
                      !this.props.currentUser ?
                      <Route render={({ history }) => (
                        <div className="newChat" primary={true} onClick={() => { history.push('/')}}>
                            <label className="newChatLbl"> LOG IN </label>
                        </div>
                      )} />

                      :
                      <div>
                          <IconMenu
                          className="miniImgPlaceholder"
                              iconButtonElement={
                                  <IconButton>
                                      <img
                                          className="miniProImage"
                                          src={this.props.pic}
                                          alt=" "
                                      ></img>
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
                                  )}>
                              </Route>
                              <Route
                                  render={({ history }) => (

                                      <MenuItem
                                          primaryText="Log out"
                                          onClick={() => {
                                              this.props.logOut()
                                              history.push('/');
                                          }}
                                      />
                                  )}>
                          </Route>
                          </IconMenu>
                          <div>
                              <img className="logoImg"
                                src="https://files.slack.com/files-pri/T02LJS8M9-F8Q87RMGD/icon.png"
                                alt=""
                              ></img>
                            </div>

                      </div>
                    }

                </div>
        )
    }
}


const mapStateToProps = state =>
{
  return {chats: state.Chat.chats,
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
