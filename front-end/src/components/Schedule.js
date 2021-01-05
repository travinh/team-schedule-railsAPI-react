import React, { useState } from 'react'

import {Link} from 'react-router-dom'

// export default class Schedule extends Component {

//     state = {
//         num_member:0
//     }

//     addMember = () => {
//         // console.log(this)
//         this.setState((prevState) => {
//             return {num_member: prevState.num_member +1}
//         })
//     }

    

//     render() {
//         return (
//             <div>
//                 <p>Title: {this.props.schedule.title} </p>
//                 <p>Content: {this.props.schedule.content}</p>
//                 <p>Member: {this.state.num_member} </p>
//                 <p>User ID: {this.props.schedule.user_id}</p>
//                 <button onClick={this.addMember}>+</button>
//                 <button onClick={() => this.props.remove(this.props.schedule.id)}>Delete</button>
//                 <hr/>
//             </div>
//         )
//     }
// }



export default function Schedule({schedule:{id,title,content,user_id,num_member},remove}) {
    
    
    // const [num_mem, setNumMember] = useState(num_member)

 
    return (
        
        <div>
        
            <Link to={`/schedules/${id}`}><p>Title: {title} </p></Link>
            <p>Content: {content}</p>
            <p>Member: {num_member} </p>
            <p>User ID: {user_id}</p>
            {/* <p>Like: {liked}</p> */}
            {/* <button onClick={()=> setLiked(liked++)}>Like</button>  */}
            {/* <button onClick={()=> addMember(num_member)}>+</button> */}
            {/* <button onClick={()=> {setNumMember(num_mem+1)}}>+</button>
            
            
            <button onClick={() => remove(id)}>Delete</button> */}


        <hr/>
            
        </div>
    )
}

