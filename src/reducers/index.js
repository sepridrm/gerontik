import { combineReducers } from 'redux';
import pasiens from './pasiens';
import user from './user'

export default combineReducers({
    userReducer : user,
    pasienReducer : pasiens
  })