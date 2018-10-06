// productReducer.js
import {LOADING_PRODUCTS, INIT_PRODUCTS} from './action-types';

const INITIAL_STATE = {
    products: [],
    loading: false
}

export default function productReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case LOADING_PRODUCTS:
            return {...state, loading: action.payload.loading }
        case INIT_PRODUCTS: 
                return {...state, products: action.payload.products }
        default:
            return state;
    }
}