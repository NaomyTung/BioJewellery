// Author: Ling Shan Matthew Ng
// Version 0.1  
// Date: 18/1/2023

// Description: This is the benefits container. 
// Precondition: A benefits container that contains 3 benefits 
// Postcondition: Benefits container containing all required benefits

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the subheader text have better padding / margins

import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';
import './Benefits.css';

const Benefits = () => (
    <div className='app__benefits app__section-padding' id='benefits'>

        <h1 className="benefits__h1">
            Benefits for your expendicy
        </h1>

        <div className='app__card-links'>
            <div className='app__card-links-align'>
                <div className='app__card-links_icons'>
                    <MdPayment />
                </div>

                <h1 className='benefits__title'>
                    Payment Method
                </h1>

                <p className='benefits__p'>
                    We offer multiple payment methods including visa, credit and debit
                </p>
            </div>

            <div className='app__card-links-align'>
                <div className='app__card-links_icons'>
                    <FiPackage />
                </div>

                <h1 className='benefits__title'>
                    Warranty Policy
                </h1>

                <p className='benefits__p'>
                    You have a warranty within 1 year of purchace
                </p>
            </div>

            <div className='app__card-links-align'>
                <div className='app__card-links_icons'>
                    <BiSupport />
                </div>

                <h1 className='benefits__title'>
                    Customer Support
                </h1>

                <p className='benefits__p'>
                    Our customer service is available 24/7
                </p>
            </div>
        </div>
    </div>
);

export default Benefits;
