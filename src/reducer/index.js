import user from './user'
import app from './app'
import bookingList from './booking-list'
import booking from './booking'
import { combineReducers } from 'redux'

export default combineReducers({
    userState: user,
    appState: app,
    bookingList: bookingList,
    booking: booking
})
