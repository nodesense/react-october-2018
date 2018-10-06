// AuthRoute.js

import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

// keep in different file
import {connect} from "react-redux";

//HoC Higher order component

const AuthRoute = ({ component, exact = false, path, authenticated }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      authenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);

const mapStateToProps = (state) => {
  console.log("Auth State", state.auth);
  
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps) (AuthRoute);