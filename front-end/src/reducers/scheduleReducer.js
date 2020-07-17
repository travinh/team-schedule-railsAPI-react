export default function scheduleReducer(state=[], action){
    switch(action.type){
        case "ADD_SCHEDULE":
            return [...state,action.payload]
        case "SET_SCHEDULES":
            return action.payload
        default:
            return state
    }
  
  }