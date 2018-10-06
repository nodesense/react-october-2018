// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
import {Helmet} from "react-helmet";

// Button.js
function Button(props) {
    return (
        <button {...props} >
            {props.children}
        </button>
    )
}

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        const id = Math.ceil(Math.random() * 10000);
        const item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        };

 

        //TODO:
        
        // clone the items and add item to cloned array
        
        const items = [...this.state.items, item];

        this.setState({items}, () => {
            // callback, called after render method
            console.log('setState Items callback');

            // calls render again, since recalculate calls setState
            // this.recalculate(this.state.items);
        }); 

        // error, since setState is async
        // this.recalculate(this.state.items);
 
        // call recalculate with next items
        this.recalculate(items)
        
    }
    

    removeItem = (id) => {
        console.log('remove item ', id)
        //TODO
        // return all items except one to be removed
        const items = this.state.items.filter (item => item.id != id);
        this.setState({items});
        this.recalculate(items);
    }

    updateItem = (id, qty) => {
        console.log('update item ', id, qty)
        //TODO
        // updating item inside array
        // rule 1. immutable items array
        // rule 2. immutable item object inside array

        // rule 1
        const items = this.state.items.map (item => {
            // if (item.id == id)
            //    item.qty = qty; //BAD, mutating qty on same object

            if (item.id == id) {
                // rule 2: clone the object, update qty on cloned object
                return {...item, qty}
            }

            return item;
        });

        this.setState({items})
        this.recalculate(items);

    }

    empty = () => {
        //TODO
        const items = []
        this.setState({items});
        this.recalculate(items);
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        // calling setState in same CALLSTACK, 
        // shall not call render multiple times
        this.setState({
            amount
        })

        this.setState({
                count
        })
    }

    //TODO:
    //componentWillMount
    componentWillMount() {
        this.recalculate(this.state.items);
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>


            <Helmet>
            <meta charSet="utf-8" />
                <title>ReactApp-Cart</title>
            </Helmet>

            <Button onClick={this.addItem} className="success">
                Add Item
            </Button>


            <button onClick={this.empty} className="success">
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>

            <CartList  items={this.state.items}
                       updateItem={this.updateItem}
                       removeItem={this.removeItem}
            />
            <CartSummary  amount={this.state.amount}
                          count={this.state.count}
            />
            
 
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}