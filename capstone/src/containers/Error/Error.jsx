// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 18/1/2023

// Description: This is the header container
// Precondition: A header container that has main header, descriptions, and a button
// Postcondition: Header container with all required components

// Input: Currently no input available
// Output: Currently no specific output

// Notes: The background image has been cropped to fit the styling. If any changes are needed, feel free to do the same thing


import React from 'react';
import { images } from '../../constants';
import { Link } from "react-router-dom"
import './Error.css';

const Error = () => (
    <div className='error' >
        <h1 className='error__404'>
            404
        </h1>

        <h1 className='error__headtext'>
            Sorry...
        </h1>

        <div className='error__context'>
            <p>
                The page you're looking for seems to have gone missing. Looks like it might have been misplaced, much like that golden necklace you lost last week. Don't worry, we'll keep searching for both.
            </p>

        </div>
    </div>
);

export default Error;

