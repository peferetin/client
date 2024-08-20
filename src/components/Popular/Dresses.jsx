import React from 'react';
import { Link } from 'react-router-dom';

const Dresses = () => {
    return (

        <div onClick={() => Navigate('/dresses')} >
            <h1>Dresses</h1>
            <p>Explore our collection of beautiful dresses.</p>
        </div>

    );
};

export default Dresses;

