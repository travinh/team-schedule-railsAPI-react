import React, {Component} from 'react'
import Schedule from './Schedule'
import ScheduleForm from './ScheduleForm'


class Schedules extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            schedules: [{id:1,title: "appointment",content: "with team",user_id: 1},
            {id:2, title: "meeting",content: "with customer",user_id: 2}]    
             
        }
        this.remove = this.remove.bind(this)
        console.log("1. Schedules constructor")
    }
    
    componentDidMount(){
        console.log("Schedules did mount")
    }


    remove(id){
        //this is here is a single schedule when we call it
        console.log("remove ", id,this)
        this.setState((prevState)=>{
            const filteredSchedules = prevState.schedules.filter(car => car.id !==id)
            return {schedules: filteredSchedules}
        })
    }

    addSchedule = (schedule) =>{
        console.log("add schedule")
        this.setState((prevState)=>{
            const id = prevState.schedules[prevState.schedules.length -1].id +1
            const copySchedule = {...schedule,id}
            console.log(copySchedule)
            return {schedules: [...prevState.schedules, copySchedule]}
        })
    }


    render(){
        console.log("render schedules")
        return(
            <>
                {this.state.schedules.map(schedule => <Schedule key={schedule.id} schedule={schedule} remove={this.remove}/>)}
                < ScheduleForm addSchedule={this.addSchedule}/>

            </>
        )
    }
}

export default Schedules