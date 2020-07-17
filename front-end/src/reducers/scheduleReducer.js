export default function scheduleReducer(state={schedules:[{id:0, title:"nothing", content: "init state", num_member: 0, user_id: 1}]}, action){
    switch(action.type){
      case "ADD_SCHEDULE":
        return {...state, schedules:[...state.schedules,action.payload]}
      default:
        return state
    }
  
  }