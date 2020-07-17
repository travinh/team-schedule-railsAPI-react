export const addSchedule = (schedule) => ({type:"ADD_SCHEDULE", payload:schedule})

export const showSchedule = (scheduleId) => ({type:"GET_SCHEDULE", payload:scheduleId})


//get all chedules from back-end and dispatch them to store
export const setSchedules = (schedules) => ({type:"SET_SCHEDULES", payload:schedules})

export const setSchedule = (schedule) => ({type:"SET_SCHEDULE", payload:schedule})

export const createSchedule = (schedule) => ({type:"POST_SCHEDULE", payload:schedule})

export const fetchSchedules = () => {
    return(dispatch) => {
        return fetch("http://localhost:3000/api/v1/schedules")
        .then(resp => resp.json())
        .then(data => {
            dispatch(setSchedules(data))
        })
    }
}

export const scheduleShow = (id) =>{
    return(dispatch) => {
        return  fetch(`http://localhost:3000/api/v1/schedules/${id}`)
        .then(resp => resp.json())
        .then(data => {
            if (data == null){
                alert("Schedule not found")
            }
            else{
                dispatch(setSchedule(data))
            }
            
        })
    }
}

export const postSchedule = (schedule) =>{
    return(dispatch) => {
        return  fetch("http://localhost:3000/api/v1/schedules",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(schedule)
          })
        .then(resp => resp.json())
        .then(data => {
            if (!data.errors){
                alert("Create Successfully!")
            }
            else{
                alert("Fail to Create!")
            }
            
        })
    }
}