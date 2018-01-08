import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// TODO : Import all the functions from the reducers
import HeaderNav  from './headerNav'

import {
  getUser,
  changeUser
} from '../reducers/Account'


const home = props => (
  <div>
      <HeaderNav></HeaderNav>
      <div>
        <a href="#" onClick={()=> {props.getUser}}>Click</a>
        <a href="#" onClick={()=> { props.changeUser("joe") }}>CHange</a>
          <p>
            Home { props.currentUser.userName }
          </p>
        </div>
    </div>
)

const mapStateToProps = state => ({
  currentUser: state.Account.currentUser
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
  changeUser
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(home)
