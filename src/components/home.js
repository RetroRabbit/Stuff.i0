import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// TODO : Import all the functions from the reducers
import HeaderNav  from './headerNav'

import {
  getUser,
  changeUser,
  getCurrentUser,
  registerUser,
  loginUser
} from '../reducers/Account'

import {
  addMsg,
  getMsgs
} from '../reducers/Chat'

const home = props => (
  <div>
      <HeaderNav></HeaderNav>
      <div>
          <a href="#!" onClick={()=> { props.getUser(12) }}>GET USER (12)</a><br/><br/><br/>
          <a href="#!" onClick={()=> { props.getMsgs(2,4) }}>GetMsgs</a><br/><br/><br/>
          <a href="#!" onClick={()=> { props.addMsg("New msg",2,4) }}>Add MSG</a><br/><br/><br/>
          <a href="#!" onClick={()=> { props.addMsg("New msg other",0,4) }}>Add MSG other</a><br/><br/><br/>

          <a href="#!" onClick={()=> { props.registerUser({ userName:"NewMember",userID:12,userPassword:"joe",userEmail:"joe@gmail.com" }) }}>Register</a><br/><br/><br/>
          <a href="#!" onClick={()=> { props.loginUser({ userPassword:"joe",userEmail:"joe@gmail.com" }) }}>Login</a><br/><br/><br/>

          <p>
            Current User Name = { props.currentUser ? props.currentUser.userName : <p>Not Logged in</p> }
          </p>
          <p>
            Msgs length = { props.msgs.length }
          </p>
          <p>
            users length = { props.users.length }
          </p>
        </div>
    </div>
)

const mapStateToProps = state => ({
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
  loginUser
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(home)
