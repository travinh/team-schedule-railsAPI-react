export default function postSchedule(state={}, action){
    switch(action.type){
        case "POST_SCHEDULE":
            return action.payload
        default:
            return state
    }
  
  }