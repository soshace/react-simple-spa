import user from './user'
import app from './app'
import { combineReducers } from 'redux'

export default combineReducers({
    userState: user,
    appState: app
})
