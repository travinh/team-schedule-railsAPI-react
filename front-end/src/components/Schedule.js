import React, { Component } from 'react'

export default class Schedule extends Component {

    state = {
        num_member:0
    }

    addMember(){
        console.log("add member")
    }

    render() {
        return (
            <div>
                <p>Title: {this.props.schedule.title} </p>
                <p>Content: {this.props.schedule.content}</p>
                <p>Member: {this.state.num_member} </p>
                <p>User ID: {this.props.schedule.user_id}</p>
                <button onClick={this.addMember}>+</button>
                <hr/>
            </div>
        )
    }
}



// export default function Schedule({title,content, num_member,user_id}) {
//     return (
//         <div>
//             <p>Title: {title} </p>
//             <p>Content: {content}</p>
//             <p>Num Member: {num_member}</p>
//             <p>User ID: {user_id}</p>
//         <hr/>
            
//         </div>
//     )
// }

