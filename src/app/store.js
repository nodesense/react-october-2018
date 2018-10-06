// store.js
import { createStore, 
         combineReducers, 
         applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import counterReducer from './state/counterReducer';
import authReducer from './state/authReducer';
import productReducer from './state/productReducer';

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer,
    auth: authReducer, 
    // items: cartReducer,
    productState: productReducer
    // ......
});


function loggerMiddleware({dispatch, getState}) {
    return function(nextFn) {
        return function(action) {
            console.log('LOGGER ', action)
            console.log('Type of action ', typeof action);
            
            // if (typeof action === 'function') {
            //     return action( dispatch, getState);
            // }

            return nextFn(action); // forward action to reducer or next middleware
        }
    }
}

function counterStorageMiddleware(store) {
    return function(nextFn) {
        return function(action) {
            console.log('COUNTER STORAGE MIDDLEWARE ', action);

            const result = nextFn(action); // forward action to reducer or next middleware
            
            if (typeof action === 'object' && 
                action.type.indexOf('COUNTER.') >= 0) {
                    const state = store.getState();
                    console.log('update counter to storage ', state.counter);
                    window.localStorage.setItem('counter', state.counter);
            }

            return result;
        }
    }
}


// createStore calls the reducer very first time
// to initialize the default state

const counter = parseInt(window.localStorage.getItem('counter')) || 0;

const store = createStore(rootReducer, 
                            {
                                counter: counter
                            }, 
                          applyMiddleware(loggerMiddleware,
                                          thunk, // call action function
                                          counterStorageMiddleware))
export default store;

// store.getState() ==> {counter: 0, 
//                        auth: {authenticated: false, fullName: ''}   },
//                        items: [  ]