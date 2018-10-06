// authReducer.js
import {LOGGED_IN, LOGGED_OUT} from './action-types';

const INITIAL_STATE  = {
    authenticated: false,
    fullName: ''
}

const authReducer = (state = INITIAL_STATE, action) => {
    console.log('authReducer ', state, action)
    switch(action.type) {
        case LOGGED_IN: 
            return {...state, authenticated: true}
        case LOGGED_OUT:
            return {...state, authenticated: false}
        default:
            return state;
    }
}

export default authReducer;