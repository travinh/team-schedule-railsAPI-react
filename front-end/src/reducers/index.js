import {combineReducers} from 'redux'
import schedules from './scheduleReducer'
import selectedSchedule from './selectedSchedule'
import postSchedule from './postSchedule'

export default combineReducers({
    schedules,
    selectedSchedule,
    postSchedule
})