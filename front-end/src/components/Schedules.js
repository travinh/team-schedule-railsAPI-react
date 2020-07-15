import React, {Component} from 'react'
import Schedule from './Schedule'

const schedules = [{title: "appointment",content: "with team",num_member: "2",user_id: 1},
{title: "meeting",content: "with customer",num_member: "4",user_id: 2}]

class Schedules extends Component{


    render(){
        return(
            <>
                {schedules.map(schedule => <Schedule {...schedule}/>)}
            </>
        )
    }
}

export default Schedules