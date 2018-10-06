// App.js
import React from 'react';

// dumb component
// import Header from './components/Header';

// smart container component
import Header from './containers/Header';

// HeaderCon = withRouter(Header)

import ProductList from './containers/ProductList';

import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import ReduxCounter from './components/ReduxCounter';

// container comp
import AuthRoute from './components/AuthRoute';

// import Cart from './cart/components/Cart';

import Loadable from 'react-loadable';

import {Route, Switch} from 'react-router-dom';

function Loading() {
    return  (
        <div>
            <h2>Loading page......</h2>
        </div>
    )
}

const LoadableCart = Loadable({
  loader: () => import('./cart/components/Cart'),
  loading: Loading,
});

const Login = () => (
    <h2>Login Page</h2>
)

export default class App extends React.Component {
    // react keyword
    // create virtual dom, return the v.dom

    render() {
        console.log('App render');
        // JSX => JavaScript + XML
        // JSX converted to JS by babel presets babel-react

        return (
            <div>
                {/* comments in JSX */}
                {/* component composition 
                    App is a parent component
                    Header, Footer, Home, are child component
                */}
                 <Header title="React App" />

                
                <Switch>
                    <Route path="/" exact component={Home} />

                    <AuthRoute path="/cart" component={LoadableCart} />

                    <AuthRoute path="/about/:country" component={About} />
                    
                    <AuthRoute path="/contact" component={Contact} />
                    
                    <AuthRoute path="/counter" component={ReduxCounter} />
                    
                    <Route path="/products" component={ProductList} />
                    <Route path="/login" component={Login} />

                    
                    <Route path="*" component={NotFound} />
                </Switch>


                 <Footer company={"React App"}
                         year={2016 + 2}
                         
                         address = { {city: 'Noida', state: 'UP'}   }
                >
                    <p>Contact time: 9:00 AM to 5:00 PM</p>
                    <p>Phone: 223232323323</p>
                </Footer>
            </div>
        )

    }
}