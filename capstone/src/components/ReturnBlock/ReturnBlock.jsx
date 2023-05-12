// Author: Buola Achor
// Version: 0.1 
// Date: 3/15/2023

// Description: This component is features the individual return
// Precondition: There must be a product that can be displayed
// Postcondition: Displays the Product details with the relavent information

// Input 
// N/A
// Output
// Product Detail Container

import React from 'react';
import './ReturnBlock.css';

const ReturnBlock = () => {
    return (
        <div className="return__center">
            <h1 className="return__header">Heading</h1>
                <h1 className="return__date">xx Minutes ago</h1>
        </div>
    )
};


export default ReturnBlock;