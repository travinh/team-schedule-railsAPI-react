
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {showSchedule} from '../actions/scheduleActions'
import {setSchedules} from '../actions/scheduleActions'

// import {showSchedule} from '../actions/scheduleActions'



export class ScheduleShow extends Component{

    constructor(props) {
        super(props)
        
        this.state={
            schedule: {
                title: "",
                content: "",
                user_id: "",
                num_member: ""
            }
        }
    }
    componentDidMount(){
        console.log("1")
   
        // this.props.showSchedule(this.props.match.params.id)
        console.log(this.props)
        let selectedSchedule = {}
        selectedSchedule = this.props.schedules.schedules.find(item => item.id === parseInt(this.props.match.params.id))
        this.setState({
            schedule : selectedSchedule
        })
        

    }

   
    
    render() {
       
        console.log("render")
        
        return (
            <div>
                <p>Title: {this.state.schedule.title} </p>
                <p>Content: {this.state.schedule.content}</p>
                <p>Member: {this.state.schedule.num_member} </p>
                <p>User ID: {this.state.schedule.user_id}</p>
                
            </div>
        )
   
        
    }
}

const mapStateToProps =(state) =>{
    console.log("2", state)
    return{
        
        schedules:state
        
    }
}

export default connect(mapStateToProps,{showSchedule,setSchedules})(ScheduleShow)



