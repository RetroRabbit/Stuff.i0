import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderNav from './headerNav';

import {
  getUser,
  changeUser,
  getCurrentUser,
  registerUser,
  loginUser,
  logOut
} from '../reducers/Account';

import {addMsg, getMsgs, getChats} from '../reducers/Chat';

const styles = {
  gridList: {
    width: '100%',
    overflowX: 'auto'
  }
};

class settings extends Component {

  constructor(props){
      super(props);
      props.getCurrentUser();
  }

  saveChanges() {
    this.props.changeUser({userName:this.state.user.name,userSurname:this.state.user.surname});
    this.props.getCurrentUser();
  }

  state = {
    editingEmail: false,
    editingNames: false,
    user:''
  };

  render() {
    return (
    <div>

      <HeaderNav changeProps={ this.props } { ...this.props }></HeaderNav>
      <GridList cols={1} cellHeight={80} style={styles.gridList}>
        <GridTile className="text-center" cols={1} rows={4}>
          <Paper className="oval text-center" size="50" zDepth={4} circle={true}>
            <Avatar size="60" className="oval" src={this.props.currentUser.userImg}/>
          </Paper>
        </GridTile>

        <GridTile className="text-center" cols={1} rows={1}>
          <div>
            {
              this.state.editingNames
                ? <div>
                    <TextField onChange={(e) => {
                        var newSelected = this.props.currentUser;
                        newSelected.surname = e.target.value.split(' ')[0]
                        newSelected.name = e.target.value.split(' ')[1]
                        this.setState({user: newSelected})
                      }} hintText="Surname Name"/>
                    <IconButton onClick={() => {
                        this.saveChanges();
                        this.setState({editingNames: false})
                      }} iconStyle={styles.mediumIcon} style={styles.medium}>
                      <ActionDone/>
                    </IconButton>
                  </div>
                : <div>
                    <label className="userTitleText">
                      {this.props.currentUser.userSurname} {this.props.currentUser.userName}
                    </label>
                    <IconButton onClick={() => {
                        this.setState({editingNames: true})
                      }} iconStyle={styles.mediumIcon} style={styles.medium}>
                      <EditorModeEdit/>
                    </IconButton>
                  </div>
            }
          </div>

        </GridTile>

        <GridTile className="text-center" cols={1} rows={1}>
          <div>
            {
              this.state.editingEmail
                ? <div>
                    <TextField onChange={(e) => {
                        var newSelected = this.props.currentUser;
                        newSelected.email = e.target.value
                        this.setState({user: newSelected})
                      }} hintText="Email Address"/>
                    <IconButton onClick={() => {
                        this.saveChanges();
                        this.setState({editingEmail: false})
                      }} iconStyle={styles.mediumIcon} style={styles.medium}>
                      <ActionDone/>
                    </IconButton>
                  </div>
                : <div>
                    <label className="userTitleText">
                      {this.props.currentUser.userEmail}
                    </label>
                    <IconButton onClick={() => {
                        this.setState({editingEmail: true})
                      }} iconStyle={styles.mediumIcon} style={styles.medium}>
                      <EditorModeEdit/>
                    </IconButton>
                  </div>
            }
          </div>
        </GridTile>

        <GridTile className="text-center" cols={1} rows={2}>
          <RaisedButton onClick={() => this.saveChanges()} label="Done" secondary={true}></RaisedButton>
        </GridTile>
      </GridList>
    </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(settings);
