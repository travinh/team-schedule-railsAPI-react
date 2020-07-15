import React, { Component } from 'react'

export default class ScheduleForm extends Component {

    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }

    handleSubmit = (e) =>{
        console.log("handle submit")
        e.preventDefault()
        console.log(this)
     
        const [title,content, user_id] = e.target.querySelectorAll("input")
        const schedule = {
            title : title.value,
            content : content.value, 
            user_id : user_id.value 

        }
        console.log(schedule)
        this.props.addSchedule(schedule)


    }
    

    render() {
        return (
            <form id="schedule-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Title" name="title"></input>
                <input type="text" placeholder="Content" name="content"></input>
                <input type="text" placeholder="User ID" name="userID"></input>
                <input type="submit" value="Create Schedule"></input>
            </form>
        )
    }
}
