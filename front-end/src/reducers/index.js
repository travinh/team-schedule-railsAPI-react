import {combineReducers} from 'redux'
import schedules from './scheduleReducer'
import selectedSchedule from './selectedSchedule'

export default combineReducers({
    schedules,
    selectedSchedule
})