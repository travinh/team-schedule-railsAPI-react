import React, {Component} from 'react'
import {connect} from 'react-redux'
import Schedule from './Schedule'
import Clock from './Clock'
import ScheduleForm from './ScheduleForm'
import ScheduleShow from './ScheduleShow'
import {fetchSchedules} from '../actions/scheduleActions'

// import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"


class Schedules extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            // {id:1,title: "appointment",content: "with team",user_id: 1, num_member: 0},
            // {id:2, title: "meeting",content: "with customer",user_id: 2, num_member: 0}
            schedules: [],  
            title:"Loading..." , displayClock:true
             
        }
      
        this.handleChange = this.handleChange.bind(this);
        this.remove = this.remove.bind(this)
        console.log("1. Schedules constructor")
    }


    // like(){
    //     console.log("liked", liked)
        

    // }
    remove(id){
        //this is here is a single schedule when we call it
        console.log("remove ", id,this.props)


    }

  

    componentDidMount(){
        console.log("Did mount")
        console.log(this.props.fetchSchedules, fetchSchedules)
     
        
        this.props.fetchSchedules()
        
        
        setTimeout(() => {
            this.setState({title:"Schedules List"})
        }, 1000);

        // this.setState({
        //     schedules: this.props.schedules
        //   });
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Update")
       

    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("receive props", nextProps)
    //     this.setState({
    //       schedules: nextProps.schedules
    //     });
    //   }


    toggleClock = () =>{
        this.setState((prevState) => ({displayClock:!prevState.displayClock}))
        
    }

    refreshData = () =>{
        
        console.log("Refreshed data!!")

        
        // this.props.fetchSchedules()
        

    }


    // addSchedule = () => {

    //     console.log("add schedule")

    //     this.setState((prevState,props) =>{
    //         debugger
    //     })


    // }
  
    handleChange(e){
        // const filteredSchedules = schedules.filter(car => car.id !==id)
        let currentList = [];
        let newList = [];
       
        if (e.target.value !== "") {
            
            currentList = this.props.schedules;

            newList = currentList.filter(schedule=>{
                const lc= schedule.title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            })

        }
        else{
            newList = this.props.schedules;
        }
        
        this.setState({schedules: newList,
        search: e.target.value})
        console.log("after handle setstate")

        
    
    }
    


    render(){
        console.log("render")
        
        // console.log("state render:",this.state)
        console.log("props render:",this.props)
        console.log("state render:",this.state)
        

        return(
            <Router>
                <div>
                    <Link to="/" onClick={this.refreshData}><button>Home</button></Link>
                    <Link to="/schedules/new"><button>New Shedule</button></Link>
                    <Link to="/clock"><button>Clock</button></Link>
                   
                    
                    

                    <Switch>
                        {/* <Route path="/schedules/new">
                            <h2>Create New Schedule</h2>
                            < ScheduleForm addSchedule={this.addSchedule}/>
                        </Route> */}
                        <Route path="/schedules/new" component={ScheduleForm} />

                        
                        

                        
                        <Route path="/clock">
                            <h2>Clock</h2>
                            {this.state.displayClock ? <Clock /> : null}
                            <button onClick={this.toggleClock}>{this.state.displayClock ? "Hide Clock" : "Show Clock"}</button>
                    
                        </Route>

                        {/* <Route path="/schedules/:id" render={(routerProps)=> <ScheduleShow {...routerProps} schedules={this.state.schedules}/>} /> */}
                        <Route path="/schedules/:id" component={ScheduleShow} />                        

                       
                        
                        
                        <Route path="/">
                            {/* <p>
                            <input type="text" placeholder="search" onChange={this.handleChange} value={this.state.search}></input>
                            </p> */}
                            <h1>{this.state.title}</h1>
                            {this.props.schedules.map(schedule => 
                             <Schedule key={schedule.id} schedule={schedule}  />)}
                        </Route>

                    </Switch>
                    
                   

                </div>

            </Router>
          
        )
    }
}

function mapStateToProps(state){

    console.log("state in schedules:",state)
    
    return{

        schedules: state.schedules
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchSchedules: () => dispatch(fetchSchedules())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Schedules)