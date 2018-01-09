import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login_btn from './login_btn'

export default combineReducers({
  routing: routerReducer, 
  validate, asyncValidate,
})