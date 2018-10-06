import React, {Component} from 'react';

import PropTypes from 'prop-types';

/*
 class Component {
    constructor(props) {
        this.props = props;
    }
}
*/

class Counter extends Component {

    //ES.NEXT static variable definition inside class
    static propTypes = {
        startValue: PropTypes.number
    }

    static defaultProps = {
        startValue: 0
    }

    // props passed here as cons parameter
    constructor(props) {
         super( props ) // super => Component constructor

         //react keyword
         // initialize state
         // component own data, wants to mutate/update* the data
         // only for class component
         this.state = {
            // initialize state from props
            counter: this.props.startValue
         }

         // ES5, bind to bind the increment function with this object
         // only once per component inst
         this.incrementBind = this.increment.bind(this);
         console.log('Counter comp created')
    }

    // ES 6 function
    increment () {
        console.log("Counter increment ", this);
        //BAD
        this.state.counter++; 
        // trigger react to call render function
        // react keyword
        // BAD
        this.forceUpdate();
    }

    //ES.NEXT Solve this in context
    // decrement created only once
    // recommended
    decrement = () => {
        console.log("Counter decrement ", this)

        //keyword
        //GOOD
        //setState is async
        // does batch update
        // merge state to form nextState
        // calls lifecycle called shouldComponentUpdate 
        // to decide render to be called or not
        console.log('counter before ', this.state.counter)
        this.setState({
            counter: this.state.counter + 1
        })
        console.log('counter after ', this.state.counter)
    }

    componentWillMount() {
        console.log('Counter component will mount')
    }

    componentDidMount() {
        console.log('Counter component did mount');

        this.timer = setInterval( () => {
            console.log('timer running ', this.state.counter)
            this.setState({
                counter: this.state.counter + 1
            })
        }, 2000)
    }

    componentWillUnmount() {
        console.log('Counter component will unmount');
        clearInterval(this.timer);
    }
 
    render() {
        console.log('Counter render')
         
        // props is react keyword
        console.log('counter props ', this.props)
        return (
            <div>
                <h4>Counter</h4>
                <span>{this.state.counter}</span>

                {/* pass the function as reference/callback
                    when user clicks button, func called by react    
                */}
                {/* 
                    solve this using es6 arrow 
                    cons: the wrapper created for every render
                */}

                <button onClick={() => this.increment()}>
                    +1
                </button>

                <button onClick={this.incrementBind}>
                   ES5 Bind +1
                </button>

                <button onClick={this.decrement}>
                   ES.next -1
                </button>
                
            </div>
        )
    }
}

// //ES6 style, static field not supported inside class
// Counter.propTypes = {
//     startValue: PropTypes.number
// }

// //ES6 style, static field not supported inside class
// Counter.defaultProps = {
//     startValue: 0
// }

export default Counter;
