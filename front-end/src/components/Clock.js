import React, {Component} from 'react'

class Clock extends Component{
    state={
        time: new Date()
    }


    render(){
        return(
            <div>
                <h2>{this.state.time.toLocaleDateString}</h2>
            </div>
        )
    }

}

export default Clock