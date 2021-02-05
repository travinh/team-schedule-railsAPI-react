import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {postSchedule} from '../actions/scheduleActions'


import {addSchedule} from '../actions/scheduleActions';

// import axios from 'axios'

export class ScheduleForm extends Component {

    constructor(props) {
        super(props)
        this.formRef = React.createRef()
        
        this.state = {
             title: "",
             content: "",
             user_id: "",
             num_member: ""
        }
    }

   
    handleSubmit = (e) =>{
 
        e.preventDefault()
        console.log("this.state in handle sumbit: ", this.state)
        // this.props.postSchedule(this.state)

        fetch("http://localhost:3000/api/v1/schedules",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
          })
        .then(resp => resp.json())
        .then(data => {
            if (!data.errors){
                // dispatch(createSchedule(schedule))
                alert("Create Successfully!")
            }
            else{
                alert("Fail to Create!")
                
            }
            
        })

        this.props.addSchedule(this.state)

        

        
        
        this.setState({
            title : "",
            content : "",
            user_id : "",
            num_member: ""
        })

        
    }

    handleChange = (e) =>{
        
        this.setState({[e.target.name]: e.target.value})
        
    }
    

    render() {
       
        // console.log(this.state)
        return (
            <form id="schedule-form" onSubmit={this.handleSubmit} ref={this.formRef} >
                <input type="text" placeholder="Title" name="title" onChange={this.handleChange} value={this.state.title}></input>
                <input type="text" placeholder="Content" name="content" onChange={this.handleChange} value={this.state.content}></input>
                <input type="text" placeholder="User ID" name="user_id" onChange={this.handleChange} value={this.state.user_id}></input>
                <input type="text" placeholder="Num Member" name="num_member" onChange={this.handleChange} value={this.state.num_member}></input>
                <input type="submit" value="Create Schedule"></input>
            </form>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     console.log("map Dispatch to props")
//     //return object
//     return{
//         addSchedule: (schedule) => dispatch(addSchedule(schedule))
//     }
// }


export default connect(null, {addSchedule}) (ScheduleForm)