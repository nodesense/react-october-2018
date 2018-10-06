// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate

    // 1. when? called whenever parent render called on update cycle 
    // to handle props change
    // 2. when? whenever this.setState to handle current component state change
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartList shouldComponentUpdate')
        // shallow comparison
        if (nextProps.items != this.props.items) {
            console.log('items are different shall call render');
            return true; // calls render function
        }

        console.log('items are same, no render');
        return false; // doesn't call render
    }
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {/* key is react keyword for tracking v.dom */}

                    {
                        
                        items.map(item => (
                            <CartItem item={item} 
                                      key={item.id}
                                      updateItem={this.props.updateItem}
                                      removeItem={this.props.removeItem}
                            />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}