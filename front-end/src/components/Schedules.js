import React, {Component} from 'react'
import Schedule from './Schedule'
import Clock from './Clock'
import ScheduleForm from './ScheduleForm'
import ScheduleShow from './ScheduleShow'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"


class Schedules extends Component{

    constructor(props) {
        super(props)
    
        // this.state = {
        //     schedules: [{id:1,title: "appointment",content: "with team",user_id: 1},
        //     {id:2, title: "meeting",content: "with customer",user_id: 2}],  
        //     title:"Loading..." , displayClock:true   
             
        // }
        this.state = {
            schedules: [],  
            title:"Loading..." , 
            displayClock:true   
             
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
        fetch("http://localhost:3000/api/v1/schedules")
        .then(resp => resp.json())
        .then(data => {
            this.setState({schedules:data})
        })
        
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
        // console.log(this.state)
        return(
            <Router>
                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/schedules/new"><button>New Shedule</button></Link>
                    <Link to="/clock"><button>Clock</button></Link>

                    <Switch>
                        <Route path="/schedules/new">
                            <h2>Create New Schedule</h2>
                            < ScheduleForm addSchedule={this.addSchedule}/>
                        </Route>

                        
                        <Route path="/clock">
                            <h2>Clock</h2>
                            {this.state.displayClock ? <Clock /> : null}
                            <button onClick={this.toggleClock}>{this.state.displayClock ? "Hide Clock" : "Show Clock"}</button>
                    
                        </Route>

                        <Route path="/schedules/:id" render={(routerProps)=> <ScheduleShow {...routerProps} schedules={this.state.schedules}/>} />

                       

                        
                        <Route path="/">
                            <h1>{this.state.title}</h1>
                            {this.state.schedules.map(schedule => <Schedule key={schedule.id} schedule={schedule} remove={this.remove}/>)}
                        </Route>

                    </Switch>
                    
                   

                </div>

            </Router>
          
        )
    }
}

export default Schedules