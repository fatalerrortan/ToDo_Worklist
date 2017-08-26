import {User_Login, Request_Worklist, Receive_Worklist} from './actions'
import { combineReducers } from 'redux'

function userReducer(state =
  {
      isLoggedIn: false
  }, action) {
    switch (action.type){
        case User_Login:
            return Object.assign({},state,{
                isLoggedIn: true
            });
        default:
            return state;
    }
}

function listReducer(state = {
    isFetiching: false,
    worklist: []
}, action) {
    switch (action.type){
        case Request_Worklist:
            return Object.assign({},state,{
                isFetiching: true
            });
        case  Receive_Worklist:
            // console.log(action.list);
            return Object.assign({}, state, {
                isFetiching: false,
                worklist: action.list
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    userReducer,
    listReducer
});

export default rootReducer;
