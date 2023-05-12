// Author: Ling Shan Matthew Ng
// Version 0.1
// Date: 18/1/2023

// Description: This is the footer container
// Precondition: A footer container that has 4 columns, 2 social media icons, and contact details
// Postcondition: Home page with a scrollable carousel

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Not sure if the company name is copyrighted for the moment. It has been created just in case
// Notes: Styling of the icons can be further modified if needed

import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { Link } from "react-router-dom"
import './Footer.css';

const Footer = () => (
    <div className='footer' id='footer'>
        <div className='footer__links'>
            <div className='app__card-links_logo'>
                <div className='footer__links-icons'>
                    <FiInstagram />
                    <FaTiktok />
                </div>

                <p className="footer__p">
                    Contact Number
                    <br />
                    +123456789
                </p>
            </div>

            <div className='app__card-links-align'>
                <h1 className='footer-headtext'>
                    My Account
                </h1>

                <p className='app__p'>
                    Sign In
                </p>

                <p className='app__p'>
                    Register
                </p>

                <p className='app__p'>
                    Order Status
                </p>
            </div>

            <div className='app__card-links-align'>
                <h1 className='footer-headtext'>
                    Help        </h1>

                <p className='app__p'>
                    Shipping
                </p>

                <p className='app__p'>
                    Returns
                </p>

                <p className='app__p'>
                    Sizing
                </p>
            </div>

            <div className='app__card-links-align'>
                <h1 className='footer-headtext'>
                    Shop
                </h1>

                <p className='app__p'>
                    <Link to="/categories">Products</Link>
                </p>

                <p className='app__p'>
                    Gold
                </p>

                <p className='app__p'>
                    Silver
                </p>
            </div>

            <div className='app__card-links-align'>
                <h1 className='footer-headtext'>
                    Legal
                </h1>

                <p className='app__p'>
                    Shipping & Delivery
                </p>

                <p className='app__p'>
                    Terms & Condition
                </p>

                <p className='app__p'>
                    Privacy & Policy
                </p>
            </div>
        </div>

        <div className='footer__copyright'>
            <p className='app__p'>
                Copyright @ 2023 BioJewlery All rights Reserved
            </p>
        </div>
    </div>
);

export default Footer;
