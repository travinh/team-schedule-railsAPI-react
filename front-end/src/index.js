import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, compose} from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(scheduleReducer, composeEnhancers())

function scheduleReducer(state=[{id:0, title:"nothing", content: "init state", num_member: 0, user_id: 1}], action){
  switch(action.type){
    case "ADD_SCHEDULE":
      return [...state, action.payload]
    default:
      return state
  }

}

ReactDOM.render(
  <Provider store={store}><App /></Provider>
    
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
