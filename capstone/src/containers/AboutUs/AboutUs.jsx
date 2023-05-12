// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 7/2/2023

// Description: This is the login page
// Precondition: A login page that contains the login form and proper styling
// Postcondition: Login page reformatting

// Input: Currently no input available
// Output: Currently no specific output

import React from 'react';
import './AboutUs.css';
import { AboutCompany, AboutHeader, AboutSustain } from '../AboutUs';

const AboutUs = () => {

    return (
        <div className='about'>
            <AboutHeader />
            <AboutCompany />
            <AboutSustain />
        </div>
    );
};

export default AboutUs;

