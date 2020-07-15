// import React, { useState } from 'react'

// import {Link} from 'react-router-dom'




// export default function ScheduleShow(props) {
//     // {props,schedule:{id,title,content,user_id},remove}
//     const [num_member, setNumMember] = useState(0)



//     return (
//         <div>
//             {console.log(props)}
//             <h1>Schedule Information</h1>
//             {/* <Link to={`/schedules/${id}`}><p>Title: {title} </p></Link>
//             <p>Content: {content}</p>
//             <p>Member: {num_member} </p>
//             <p>User ID: {user_id}</p>
//             <button onClick={()=> {setNumMember(num_member+1)}}>+</button>
//             <button onClick={() => remove(id)}>Delete</button>

//         <hr/> */}
            
//         </div>
//     )
// }

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

    componentDidMount(){
        
        fetch(`http://localhost:3000/api/v1/schedules/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(data => {
            if (data !=null){
                this.setState({schedule:data})
            }
            

        })
    }

   

    render() {
        console.log(this.state)
   
        if (this.state.schedule.id != null){
            return (
                <div>
                    <p>Title: {this.state.schedule.title} </p>
                    <p>Content: {this.state.schedule.content}</p>
                    <p>Member: {this.state.schedule.num_member} </p>
                    <p>User ID: {this.state.schedule.user_id}</p>
                    
                </div>
            )
        }
        else {
            return(
                <div>
                    <h1>ID not found</h1>
                </div>
            )
        }
        
    }
}


