import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// TODO : Import all the functions from the reducers

import { alert } from '../reducers/reducer1'

const home = props => (
  <div>
    <h1>Home</h1>
      <div>
          <p>
            <button onClick={alert(props.alert)}>Alert {props.alert.text}</button>
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
