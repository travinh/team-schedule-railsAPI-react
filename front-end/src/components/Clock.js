import React, {Component} from 'react'

class Clock extends Component{
    state={
        time: new Date()
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);
    }


    render(){
        return(
            <div>
                <h2>{this.state.time.toLocaleString()}</h2>
            </div>
        )
    }

}

export default Clock