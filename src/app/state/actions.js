// action.js
// action creators, create an action and return action
// pure function => given same input, return same output

import * as ActionTypes from './action-types';
import * as api from './api';


export function increment(value) {
    return {
        type: ActionTypes.INCREMENT,
        payload: {
            value
        }
    }
}

export function reset() {
    return {
        type: ActionTypes.RESET
    }
}

export const loggedIn = () => { // multi-line, need explicit return
    return {
        type: ActionTypes.LOGGED_IN
    }
}

// no need for return
export const loggedOut = () => ({ 
    type: ActionTypes.LOGGED_OUT
})


// product/state/actions.js

export const initProducts = (products) => ({ 
    type: ActionTypes.INIT_PRODUCTS,
    payload: {products}
})

export const loadingProducts = (loading) => ({ 
    type: ActionTypes.LOADING_PRODUCTS,
    payload: {loading}
})


// thunk design, use actions method to implement async calls

// thunk design, return a function as an action, instead of object
export function fetchProducts() {
    return function (dispatch, getState) { // dispatch and getState passed from middleware
        console.log('function called, do ajax here')

        dispatch(loadingProducts(true));

        api.getProducts()
            .then (products => {
                const action = initProducts(products);
                dispatch(action); // dispatch object
                dispatch(loadingProducts(false));
            })
    }
}
