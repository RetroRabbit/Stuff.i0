import React, { Component} from 'react'
import PropTypes from 'prop-types'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'


class Register extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <StepOne onSubmit={this.nextPage}/>}
        {page === 2 && <StepTwo onSubmit={this.nextPage}/>}
        {page === 3 && <StepThree onSubmit={onSubmit}/>}
      </div>
    )
  }
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Register