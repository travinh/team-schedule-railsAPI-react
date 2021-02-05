export default function scheduleReducer(state=[], action){
    switch(action.type){
        case "ADD_SCHEDULE":
            const id = state[state.length-1].id +1
            const copySchedule = {...action.payload,id}
            console.log(copySchedule)
            return [...state,copySchedule]
        case "SET_SCHEDULES":
            return action.payload
        default:
            return state
    }
  
  }