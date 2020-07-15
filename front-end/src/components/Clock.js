import React, {Component} from 'react'
import Time from './Time'

class Clock extends Component{
    state={
        time: new Date()
    }

    componentDidMount(){
        this.tick = setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.tick)

    }


    render(){
        return(
            <div>
                {/* <h2>{this.state.time.toLocaleString()}</h2> */}
                <Time time={this.state.time}/>
            </div>
        )
    }

}

export default Clock