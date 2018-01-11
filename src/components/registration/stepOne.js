import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Route } from 'react-router-dom'

import './reg.css';
import { white } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton/FlatButton';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  getUser,
  changeUser,
  getCurrentUser,
  registerUser,
  loginUser
} from '../../reducers/Account'

import {
  addMsg,
  getMsgs,
  getChats
} from '../../reducers/Chat'

class StepOne extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="pageContainer">
      <div className="regRectangle">
        <h2 className="stepHeading">Step One</h2>
        <h2 className="titleHeading">THE BASICS</h2>
        <MuiThemeProvider>
          <div className="formField" >
            <form>
              <TextField
                className="input"
                type="text"
                floatingLabelText="Your Name"
                floatingLabelStyle={{ color: white }}
                onChange={(e)=>{
										this.username = e.target.value;
									}}
              />
              <br />
              <TextField
                className="input"
                type="email"
                floatingLabelText="Email"
                floatingLabelStyle={{ color: white }}
                onChange={(e)=>{
										this.email = e.target.value;
									}}
              />
              <br />
              <TextField
                className="input"
                type="password"
                floatingLabelText="Password"
                floatingLabelStyle={{ color: white }}
                onChange={(e)=>{
										this.password = e.target.value;
									}}
              />
          </form>
          </div>
        </MuiThemeProvider>
        <div className="nextBox">

        <Route render={({ history }) => (
          <FlatButton {...this.props}
            onClick={() => {
              this.props.registerUser({userName:this.username, userEmail:this.email, userPassword:this.password})
              this.setState({ logged: false })
              history.push('/StepTwo')
            }}
            className="nextButton"
            label="Next Step" />
        )} />
        </div>
      </div>
    </div>
    )
  }

}
const mapStateToProps = state => ({
  chats:state.Chat.chats,
  msgs:state.Chat.msgs,
  currentUser: state.Account.currentUser,
  users: state.Account.users,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
  getCurrentUser,
  changeUser,
  addMsg,
  getMsgs,
  registerUser,
  loginUser,
  getChats
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
