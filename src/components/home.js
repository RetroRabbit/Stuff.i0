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
  getMsgs,
  getChats
} from '../reducers/Chat'

const home = props => (
  <div>
      <HeaderNav></HeaderNav>
      <div>

          <p>
            <a href="#!" onClick={()=> { props.loginUser({ userPassword:"joe",userEmail:"joe@gmail.com" }) }}>Login</a><br/><br/><br/>

            Current User Name = { props.currentUser ? JSON.stringify(props.currentUser) : <p>Not Logged in</p> }
          </p>
          <p>
            <a href="#!" onClick={()=> { props.getMsgs(2,4) }}>GetMsgs</a><br/>
            <a href="#!" onClick={()=> { props.addMsg("New msg from me",2,4) }}>Add MSG</a><br/>
            <a href="#!" onClick={()=> { props.addMsg("New msg other",0,4) }}>Add MSG other</a><br/>

            <h4>Msgs length = { props.msgs.length }</h4>
            <p>
              { JSON.stringify(props.msgs) }
            </p>
          </p>
          <p>

            <a href="#!" onClick={()=> { props.registerUser({ userName:"NewMember",userID:12,userPassword:"joe",userEmail:"joe@gmail.com" }) }}>Register</a><br/><br/><br/>

            <h4>users length = { props.users.length }</h4>
            <p>
              { JSON.stringify(props.users) }
            </p>
          </p>
          <p>
            <a href="#!" onClick={()=> { props.getChats(2) }}>GetChats</a><br/><br/><br/>

            <h4>chats length = { props.chats.length }</h4>
            <p>
              { JSON.stringify(props.chats) }
            </p>
          </p>
        </div>
    </div>
)

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

export default connect(mapStateToProps, mapDispatchToProps)(home);
