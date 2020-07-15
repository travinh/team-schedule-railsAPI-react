import React, {Component} from 'react'
import Schedule from './Schedule'

const schedules = [{title: "appointment",content: "with team",user_id: 1},
{title: "meeting",content: "with customer",user_id: 2}]

class Schedules extends Component{


    render(){
        return(
            <>
                {schedules.map(schedule => <Schedule schedule={schedule}/>)}
            </>
        )
    }
}

export default Schedules