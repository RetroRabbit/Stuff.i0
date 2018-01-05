import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// TODO : Import all the reducers
import reducers1 from './reducer1'

export default combineReducers({
  routing: routerReducer,
  // TODO : register all the imported reducers
  reducers1
})
