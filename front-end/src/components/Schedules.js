import React, {Component} from 'react'
import Schedule from './Schedule'
import Clock from './Clock'
import ScheduleForm from './ScheduleForm'


class Schedules extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            schedules: [{id:1,title: "appointment",content: "with team",user_id: 1},
            {id:2, title: "meeting",content: "with customer",user_id: 2}],  
            title:"Loading..." , displayClock:true   
             
        }
        this.remove = this.remove.bind(this)
        // console.log("1. Schedules constructor")
    }


    remove(id){
        //this is here is a single schedule when we call it
        // console.log("remove ", id,this)
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

    componentDidMount(){
        //place to make AJAX requests
        
        setTimeout(() => {
            this.setState({title:"Schedules List"})
        }, 1000);

        // console.log("3. Schedules did mount")
    }

    componentDidUpdate(prevProps, prevState){
        //use for AJAX requests that use more than once
        
        // console.log("4.Component Did update")
        

    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.title === this.state.title){
    //         return false
    //     }
    //     else 
    //         return true
    // }

    toggleClock = () =>{
        this.setState((prevState) => ({displayClock:!prevState.displayClock}))
    }

    render(){
        // console.log("2. render schedules")
        return(
            <>
                <h1>{this.state.title}</h1>
                {this.state.displayClock ? <Clock /> : null}
                <button onClick={this.toggleClock}>{this.state.displayClock ? "Hide Clock" : "Show Clock"}</button>
                {this.state.schedules.map(schedule => <Schedule key={schedule.id} schedule={schedule} remove={this.remove}/>)}
                < ScheduleForm addSchedule={this.addSchedule}/>

            </>
        )
    }
}

export default Schedules