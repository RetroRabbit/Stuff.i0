import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// TODO : Import all the functions from the reducers
import HeaderNav  from './headerNav'

import {
  getUser,
  changeUser,
  getCurrentUser
} from '../reducers/Account'

import {
  addMsg,
  getMsgs
} from '../reducers/Chat'

const home = props => (
  <div>
      <HeaderNav></HeaderNav>
      <div>
        <a href="#" onClick={()=> { props.getUser(4) }}>GET USER</a><br/><br/><br/>
          <a href="#" onClick={()=> { props.getMsgs(2,4) }}>GetMsgs</a><br/><br/><br/>

            <a href="#" onClick={()=> { props.addMsg("New msg",2,4) }}>Add MSG</a><br/><br/><br/>

          <p>
            Current User Name = { props.currentUser.userName }
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
  getMsgs
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(home)
