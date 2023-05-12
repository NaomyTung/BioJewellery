// Author: Ling Shan Matthew Ng, Naomy Tung
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
import './Header.css';

const Header = () => (
    <div className='header  app__section-padding overlay' id='home'>
        <div className="header-overlay app__flex-center">
            <img src={images.headerImage} alt="G_overlay" className='header-overlay-image' />
        </div>

        <div className='app__wrapper-info'>
            <h1 className='header__h1'>
                Discover the beauty of the BioJewelry Collection
            </h1>

            <p className='app__p' style={{ margin: '2rem 0' }}>
                Explore different categories. Find the best deals.
            </p>

            <Link to="/categories">
                <button type='button' className='app__button'>
                    Shop Now
                </button>
            </Link>

        </div>
    </div>
);

export default Header;

