export default function selectedSchedule(state={}, action){
    switch(action.type){
        case "SET_SCHEDULE":
            return action.payload
        default:
            return state
    }
  
  }