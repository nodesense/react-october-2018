// About.js
import React from 'react';
import {Helmet} from "react-helmet";

export default function About(props) {
    console.log("About render ", props);
    return (
        <div>
            <h2>About us - {props.match.params.country}</h2>


            <Helmet>
            <meta charSet="utf-8" />
                <title>ReactApp-About</title>
            </Helmet>

            <button onClick={ () => props.history.push("/cart") }>
                Cart
            </button>

            <button onClick={ () => props.history.replace("/cart") }>
                Replace Cart
            </button>
            

        </div>
    )
}