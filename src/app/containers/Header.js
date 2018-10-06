// containers/Header.js

// help us to create container component
import {connect} from 'react-redux';  // bridge
// redux
import * as actions from '../state/actions';
// react component
import Header from '../components/Header';

import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

// map redux state to react props
// state is param == store.getState()
// who call this function? container, pass state param
// when is this called?
//      - very first  time when component instance created
//      - on subscribe
// output: set of properties derived from state
// returned props are passed to component as props
export function mapStateToProps(state) {
    console.log('Header container mapStateToProps', state);
    return {
        // propName: value from state
        counter: state.counter,
        authenticated: state.auth.authenticated
    }
}

//dispatch is a function, ==> store.dispatch
// who calls this? Container
// when it is called?
//      only whenever new component instance created
// help to dispatch actions

export function mapDispatchToProps(dispatch) {
    console.log('Header container mapDispatchToProps')
    return {
        // propName: function() {}
        increment: function() {
            const action = actions.increment(1);
            dispatch(action)
        },

        // reset: function() {
        //     const action = actions.reset();
        //     dispatch(action)
        // },

        // login: function() {
        //     const action = actions.loggedIn();
        //     dispatch(action)
        // },

        // // create a wrapper function, that create actions and dispatch automatically
        // logout: bindActionCreators(actions.loggedOut, dispatch),

        // wrap all actions 
        actions: bindActionCreators(actions, dispatch)


    }
}



// create a container component, that wraps Header as child
// containers are pure component (shouldComponentUpdate method)
// Header render/function to be rendered only when counter props changed

// store value is  passed as react context

// container subscribe and unsubscribe automatically

//const connectDecoratorFunc = connect(mapStateToProps, mapDispatchToProps);
//const HeaderContainerComponent = connectDecoratorFunc(Header);
// export default HeaderContainerComponent;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));