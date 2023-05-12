// Author: Ling Shan Matthew Ng
// Version 0.1
// Date: 18/1/2023

// Description: SubHeading component for reuse
// Precondition: Able to use property title and stylings
// Postcondition: All functions fulfilled

// Input: title
// Output: title

import React from 'react';

const SubHeading = ({ title }) => (
    <div style={{ marginBottom: '1rem' }}>
        <h1 className='headtext__cormorant'>{title}</h1>
    </div>
);

export default SubHeading;
