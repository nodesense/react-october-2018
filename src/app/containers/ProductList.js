// containers/ProductList.js
import {connect} from "react-redux";

import ProductList from "../components/ProductList";

import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         products: state.productState.products,
         loading: state.productState.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         fetchProducts : function() {
                // returns a function as an action
                const actionFn = actions.fetchProducts();
                dispatch(actionFn); // dispatch a function
         }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)