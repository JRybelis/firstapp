import React from 'react';
import Rainbow from '../hoc/Rainbow.js'


const About = () => {
    return(
        <div className="container">
            <h4 className="center">About Page</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit sequi mollitia!</p>
        </div>
    )
}

export default Rainbow(About)