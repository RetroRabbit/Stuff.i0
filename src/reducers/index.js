import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// TODO : Import all the reducers
import Account from './Account'
import Chat from './Chat'

export default combineReducers({
  routing: routerReducer,
  // TODO : register all the imported reducers
  Account,
  Chat
})
