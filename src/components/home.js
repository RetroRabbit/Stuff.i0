import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// TODO : Import all the functions from the reducers

import { alert } from '../reducers/reducer1'
import { headerNav } from './headerNav'

const home = props => (
  <div>
      <headerNav></headerNav>
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
