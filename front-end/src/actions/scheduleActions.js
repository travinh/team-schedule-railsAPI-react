export const addSchedule = (schedule) => ({type:"ADD_SCHEDULE", payload:schedule})

export const showSchedule = (scheduleId) => ({type:"GET_SCHEDULE", payload:scheduleId})


//get all chedules from back-end and dispatch them to store
export const setSchedules = (schedules) => ({type:"SET_SCHEDULES", payload:schedules})

export const fetchSchedules = () => {
    return(dispatch) => {
        return fetch("http://localhost:3000/api/v1/schedules")
        .then(resp => resp.json())
        .then(data => {
            // console.log("data: ", data);
            dispatch(setSchedules(data)) 
        })
    }
}

