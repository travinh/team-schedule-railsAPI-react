export default function scheduleReducer(state=[{id:0, title:"nothing", content: "init state", num_member: 0, user_id: 1}], action){
    switch(action.type){
      case "ADD_SCHEDULE":
        return [...state,action.payload]
      default:
        return state
    }
  
  }