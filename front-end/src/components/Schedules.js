import React, {Component} from 'react'
import {connect} from 'react-redux'
import Schedule from './Schedule'
import Clock from './Clock'
import ScheduleForm from './ScheduleForm'
import ScheduleShow from './ScheduleShow'
import {fetchSchedules} from '../actions/scheduleActions'

// import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"


class Schedules extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            // {id:1,title: "appointment",content: "with team",user_id: 1, num_member: 0},
            // {id:2, title: "meeting",content: "with customer",user_id: 2, num_member: 0}
            schedules: [],  
            title:"Loading..." , displayClock:true   
             
        }
      
        this.remove = this.remove.bind(this)
        console.log("1. Schedules constructor")
    }


    like(){
        console.log(
            "liked"
        )
    }
    remove(id){
        //this is here is a single schedule when we call it
        console.log("remove ", id,this.props)
        
        
        // this.setState((prevState)=>{
        //     debugger
        //     const filteredSchedules = prevState.schedules.filter(car => car.id !==id)
        //     return {schedules: filteredSchedules}
        // })

        // axios.delete(`http://localhost:3000/api/v1/schedules/${id}`)
        //     .then(resp =>{
               
        //         console.log("resp:",resp)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

      

        // fetch("http://localhost:3000/api/v1/schedules")
        // .then(resp => resp.json())
        // .then(data => {
        //     this.setState({schedules:data})
        // })
        // window.location.reload(false)
    }

  

    // addSchedule = (schedule) =>{
    //     console.log("add schedule")
    //     this.setState((prevState)=>{
    //         const id = prevState.schedules[prevState.schedules.length -1].id +1
    //         const copySchedule = {...schedule,id}
    //         console.log(copySchedule)
    //         return {schedules: [...prevState.schedules, copySchedule]}
    //     })
    //     // fetch("http://localhost:3000/api/v1/schedules")
    //     // .then(resp => resp.json())
    //     // .then(data => {
    //     //     this.setState({schedules:data})
    //     // })
        

    // }

    componentDidMount(){
        //place to make AJAX requests
        // fetch("http://localhost:3000/api/v1/schedules")
        // .then(resp => resp.json())
        // .then(data => {
        //     this.props.setSchedules(data)
        // })
        console.log("A")
        this.props.fetchSchedules()
        console.log("B")
        
        setTimeout(() => {
            this.setState({title:"Schedules List"})
        }, 1000);
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("4. Schedules did update")
        //use for AJAX requests that use more than once
        
        

        
        // if()
        // {
        //     fetch("http://localhost:3000/api/v1/schedules")
        //     .then(resp => resp.json())
        //     .then(data => {
        //         respBool = true
        //         this.setState({schedules:data})
        //     })
        // }
       
        

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

    refreshData = () =>{
        console.log("Refreshed data!!")
        this.props.fetchSchedules()
        

    }

    render(){
        
        console.log("state render:",this.state)
        console.log("props render:",this.props)
        
       
        return(
            <Router>
                <div>
                    <Link to="/" onClick={this.refreshData}><button>Home</button></Link>
                    <Link to="/schedules/new"><button>New Shedule</button></Link>
                    <Link to="/clock"><button>Clock</button></Link>

                    <Switch>
                        {/* <Route path="/schedules/new">
                            <h2>Create New Schedule</h2>
                            < ScheduleForm addSchedule={this.addSchedule}/>
                        </Route> */}
                        <Route path="/schedules/new" component={ScheduleForm}/>
                        

                        
                        <Route path="/clock">
                            <h2>Clock</h2>
                            {this.state.displayClock ? <Clock /> : null}
                            <button onClick={this.toggleClock}>{this.state.displayClock ? "Hide Clock" : "Show Clock"}</button>
                    
                        </Route>

                        {/* <Route path="/schedules/:id" render={(routerProps)=> <ScheduleShow {...routerProps} schedules={this.state.schedules}/>} /> */}
                        <Route path="/schedules/:id" component={ScheduleShow}/>                        

                       
                        
                        
                        <Route path="/">
                            <h1>{this.state.title}</h1>
                            {this.props.schedules.map(schedule => <Schedule key={schedule.id} schedule={schedule} remove={this.remove} like={this.like}/>)}
                        </Route>

                    </Switch>
                    
                   

                </div>

            </Router>
          
        )
    }
}

function mapStateToProps(state){
    console.log("state:",state)
    
    return{

        schedules: state.schedules
    }
}

export default connect(mapStateToProps, {fetchSchedules}) (Schedules)