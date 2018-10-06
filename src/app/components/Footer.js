import React from 'react';
import PropTypes from 'prop-types';

import {withRouter} from 'react-router-dom';


function Footer(props) {
    // deconstruct
     
    console.log("Footer render props ", props);

    let {company, address, year } = props;

    console.log('Footer render');
    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {company}</p>
            <p>{address.city}, {address.state}</p>
            {props.children}


            <button onClick={ () => props.history.push("/cart") }>
                Cart
            </button>

        </div>
    )
}

// react keyword
Footer.propTypes = {
    company: PropTypes.string, // optional
    year: PropTypes.number.isRequired, // mandatory
    // address: PropTypes.object
    // validate internal object properties
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        pincode: PropTypes.number
    }).isRequired
}

//default props
// react keyword
// used when parent doesn't pass props
Footer.defaultProps = {
    company: 'My React App'
}

// withRouter is a function, it creates  a higher order component
// for Footer, pass the history, etc to footer component

// const FooterWithRouter = withRouter(Footer);
// export default FooterWithRouter;

export default withRouter(Footer);