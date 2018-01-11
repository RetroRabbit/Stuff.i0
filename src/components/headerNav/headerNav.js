import './headerNav.css';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Route} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import {
  getUser,
  changeUser,
  getCurrentUser,
  registerUser,
  loginUser,
  logOut
} from '../../reducers/Account';

import {addMsg, getMsgs, getChats} from '../../reducers/Chat';

class HeaderNav extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    try{
        props.getCurrentUser();
    }
    catch(exc){
            window.location.href = '/';
    }

  }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
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
      <Route render={({history}) => (<div class="newChat initial" onClick={() => {
            history.push('/accountScreen')
          }}>
          <label className="newChatLbl">
            NEW CHAT
          </label>
        </div>)}/>
      <div className="newGroup initial" primary={true} onClick={() => {}}>
        <label className="newGroupLbl">
          NEW GROUP
        </label>
      </div>
      <div class="auto">

      </div>

      <div class="test initial">
        {
            this.props.getCurrentUser ?(
                      <label className="newChatLbl" >{ this.props.name } { this.props.surname }</label>)
                      :
                      (<label  className="newChatLbl">No Logged in</label>)
                    }</div>
                  <div class="test initial">

                          <IconMenu
                          className="miniImgPlaceholder"
                              iconButtonElement={
                                  <IconButton className="miniProImage">
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
      </div>
      <div className="test initial">
        <img className="logoImg " src="https://files.slack.com/files-pri/T02LJS8M9-F8Q87RMGD/icon.png" alt=""></img>
      </div>
    </div>)
  }
}

const mapStateToProps = state => {
  return {chats: state.Chat.chats, msgs: state.Chat.msgs, currentUser: state.Account.currentUser, users: state.Account.users, receiver: state.Account.receiver};
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
