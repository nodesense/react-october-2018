// for jsx
import React from 'react'; 
import {NavLink, withRouter} from 'react-router-dom';

 
// Functional component/stateless component/dumb component
// React calls the function, get virtual.dom
// create and return v.doms
// first param is props
function Header(props) {
    console.log('Header render', props)
    // props are immutable, should not change value in child
    // error, bad practise 
    // props.title = "Test"

    return (
        <div>
            <h2>{props.title}</h2>

            <NavLink to="/" exact className="button" activeClassName="success" > Home </NavLink>
            
            <NavLink to="/cart"  className="button"
                      activeClassName="success" > Cart </NavLink>

            <NavLink to="/counter"  className="button"
                      activeClassName="success" > Counter </NavLink>

            <NavLink to="/products"  className="button"  
                        activeClassName="success"> Products </NavLink>
            <NavLink to="/about/india"  className="button"
                         activeClassName="success"> About </NavLink>
            <NavLink to="/contact"   className="button"
                                     activeClassName="success"> Contact </NavLink>

            {
                props.authenticated? <button onClick={props.actions.loggedOut}>
                                        Logout
                                    </button>
                                    : <button onClick={props.actions.loggedIn}>
                                            Login
                                      </button>
            }


            <button onClick={props.increment}>
                +1
            </button>


            <button onClick={ () => props.actions.increment(2)}>
                +2
            </button>

            <button onClick={props.actions.reset}>
                Reset
            </button>


            <span>Counter {props.counter}</span>

            <hr />
        </div>
    )
}

export default Header;