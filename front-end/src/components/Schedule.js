import React, { Component } from 'react'

export default class Schedule extends Component {
    render() {
        return (
            <div>
                <p>Title: {this.props.schedule.title} </p>
                <p>Content: {this.props.schedule.content}</p>
                <p>Num Member: {this.props.schedule.num_member}</p>
                <p>User ID: {this.props.schedule.user_id}</p>
                <hr/>
            </div>
        )
    }
}
