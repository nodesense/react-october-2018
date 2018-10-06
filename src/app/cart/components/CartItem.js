// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: this.props.item.qty
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    onChangeQty = (e) => {
        this.setState({
            qty: e.target.value
        })
    }
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={this.state.qty}
                            type="number"
                            onChange = {this.onChangeQty}
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                    {/*TODO : Call parent */}
                <button onClick={() => this.props.updateItem(item.id, parseInt(this.state.qty)) }>
                        Update
                </button>    
                 {/*TODO : Call Cart comp removeItem as callback */}
                <button onClick={() =>  this.props.removeItem(item.id) }>
                        Delete
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}