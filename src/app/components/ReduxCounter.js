// ReduxCounter.js
// learning raw redux api

import React, {Component} from "react";
import PropTypes from "prop-types";

import store from '../store';
import * as actions from '../state/actions';


export default class ReduxCounter extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.unsubscribeFn = store.subscribe ( () => {
            console.log('Counter Subscribe ', Math.random());
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        console.log('Unsubscribe from store');
        this.unsubscribeFn();
    }

    increment = () => {
        const action = actions.increment(5);
        console.log('dispatching action ', action);
        store.dispatch(action); // calls reducer internally
        console.log('done dispatch ')
    }

    reset = () => {
        const action = actions.reset();
        console.log('dispatching action ', action);
        store.dispatch(action)
    }


    dummy = () => {
        store.dispatch({type: 'DUMMY'})
    }
    
    render() {
        const state = store.getState();
        console.log("ReduxCounter render", state);

        return (    
            <div> 
            <h2>Redux Counter</h2>
            <span>{state.counter}</span>

            <button onClick={this.increment}>
                +5
            </button>

            <button onClick={this.reset}>
                Reset
            </button>

            <button onClick={this.dummy}>
                Dummy Dispatch
            </button>

            </div>
        )
    }
} 


ReduxCounter.defaultProps = {
    
}

ReduxCounter.propTypes = {
    
}