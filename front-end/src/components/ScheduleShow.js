
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {scheduleShow} from '../actions/scheduleActions'



export class ScheduleShow extends Component {
    // state= {
    //     schedule: {
    //         title: "",
    //         content: "",
    //         user_id: "",
    //         num_member: ""
    //     }
    // }

    componentDidMount(){
        
 
        this.props.scheduleShow(this.props.match.params.id)
    }

   
    
    render() {
       
        console.log(this.state)
        return (
            <div>
                <p>Title: {this.props.schedule.title} </p>
                <p>Content: {this.props.schedule.content}</p>
                <p>Member: {this.props.schedule.num_member} </p>
                <p>User ID: {this.props.schedule.user_id}</p>
                
            </div>
        )
   
        
    }
}

const mapStateToProps =(state) =>{
    return{
        schedule:state.selectedSchedule
        
    }
}

export default connect(mapStateToProps,{scheduleShow})(ScheduleShow)


