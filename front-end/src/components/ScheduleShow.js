
import React, { Component } from 'react'


export default class ScheduleShow extends Component {
    state= {
        schedule: {
            title: "",
            content: "",
            user_id: "",
            num_member: ""
        }
    }

    // componentDidMount(){
        
    //     // fetch(`http://localhost:3000/api/v1/schedules/${this.props.match.params.id}`)
    //     // .then(resp => resp.json())
    //     // .then(data => {
    //     //     if (data !=null){
    //     //         this.setState({schedule:data})
    //     //     }
            

    //     // })
        
    // }

   
    
    render() {
       
        console.log(this.state)
        return (
            <div>
                <p>Title: {this.state.schedule.title} </p>
                <p>Content: {this.state.schedule.content}</p>
                <p>Member: {this.state.schedule.num_member} </p>
                <p>User ID: {this.state.schedule.user_id}</p>
                
            </div>
        )
   
        // if (this.state.schedule != null){
        //     return (
        //         <div>
        //             <p>Title: {this.state.schedule.title} </p>
        //             <p>Content: {this.state.schedule.content}</p>
        //             <p>Member: {this.state.schedule.num_member} </p>
        //             <p>User ID: {this.state.schedule.user_id}</p>
                    
        //         </div>
        //     )
        // }
        // else {
        //     return(
        //         <div>
        //             <h1>ID not found</h1>
        //         </div>
        //     )
        // }
        
    }
}


