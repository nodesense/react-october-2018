// components/ProductList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
 
    }
    
    componentDidMount() {
        this.props.fetchProducts(); // calls containers fetchProducts
    }
    
    render() {
        const products = this.props.products;
        const loading = this.props.loading;

        if (loading) {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }

        return (
            <div> 
            <h2>Product List</h2>
            <ul>
            {
                products.map( product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))
            }
            </ul>
            </div>
        )
    }
} 


ProductList.defaultProps = {
    products: []
}

ProductList.propTypes = {
    
}