import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// TODO : Import all the functions from the reducers

import { alert } from '../reducers/reducer1'
import HeaderNav  from './headerNav'

const home = props => (
  <div>
      <HeaderNav></HeaderNav>
      <div>
          <p>
            Home
          </p>
        </div>
    </div>
)


const mapStateToProps = state => ({
  text: state.reducers1.text
})

const mapDispatchToProps = dispatch => bindActionCreators({
  alert
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(home)
