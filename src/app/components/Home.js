import React, {Component} from 'react';
import Counter from './Counter';

import {Helmet} from "react-helmet";


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true,
            homeCounter: 100,
            memberName: ""
        }
    }

    toggle = (e) => {
        console.log('event ', e)
        this.setState({
            show: !this.state.show
        })
    }

    handleChange = (e) => {
        console.log("event ", e)
        // REAL DOM for <input value="" ...
        const inputElement = e.target;
        this.setState({
            memberName: inputElement.value
        })
    }

    reset = () => {
        this.setState({
            homeCounter: 0
        })
    }

    render() {
        console.log('Home render')
        return (
            <div>
                <h2>Home</h2>


                <Helmet>
                <meta charSet="utf-8" />
                    <title>ReactApp-Home</title>
                </Helmet>

                <input name="memberName"
                       value={this.state.memberName}
                       onChange={this.handleChange} 
                />

                <p>Home Counter {this.state.homeCounter}</p>
                <button onClick={this.reset}>
                    Reset 0
                </button>

                <button onClick={this.toggle}>
                    {this.state.show? "Hide": "Show"}
                </button>

                {  this.state.show && 
                    <Counter startValue={this.state.homeCounter} />
                }
            </div>
        )
    }
}

export default Home;
