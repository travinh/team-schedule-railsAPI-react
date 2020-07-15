import React, { Component } from 'react'
import axios from 'axios'

export default class ScheduleForm extends Component {

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

    // handleSubmit = (e) =>{
    //     console.log("handle submit")
    //     e.preventDefault()
    //     // console.log(this)
     
    //     // const [title,content, user_id] = e.target.querySelectorAll("input")
    //     const [title,content, user_id, num_member] = this.formRef.current.querySelectorAll("input")
    //     const schedule = {
    //         title : title.value,
    //         content : content.value, 
    //         user_id : user_id.value,
    //         num_member : num_member.value

    //     }
    //     console.log(schedule)
    //     this.props.addSchedule(schedule)
    //     this.setState({
    //         title : "",
    //         content : "",
    //         user_id : "",
    //         num_member: ""
    //     })


    // }

    handleSubmit = (e) =>{
 
        e.preventDefault()
        console.log(this.state)
        this.props.addSchedule(this.state)
        axios.post('http://localhost:3000/api/v1/schedules',this.state)
            .then(resp =>{
                console.log(resp)
            })
            .catch(error => {
                console.log(error)
            })


        
        
        this.setState({
            title : "",
            content : "",
            user_id : "",
            num_member: ""
        })

        window.location.reload(false)
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
