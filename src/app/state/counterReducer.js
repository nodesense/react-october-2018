// counterReducer.js
import * as ActionTypes from './action-types';

// pure function, given same state and same action, return same output

const INITIAL_STATE = 0;

export default function counterReducer(state = INITIAL_STATE, action) {
    console.log('counterReducer', state, action);

    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value;
        case ActionTypes.RESET:
            return INITIAL_STATE

        case ActionTypes.LOGGED_OUT:
            return INITIAL_STATE
            
        default: //MUST
            return state;  //MUST
    }
}