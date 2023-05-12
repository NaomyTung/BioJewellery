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
import { BsExclamationCircle } from 'react-icons/bs';
import './Policy.css';

const Policy = () => (
    <div className='policy app__section-padding' >
        <h1 className='policy__header'>
            Privacy and Policy
        </h1>

        <h1 className='policy__title'>
            Privacy
        </h1>

        <ol>
            <li className='policy__subtitle'>
                Use of Personal Information
                <ul className='policy__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                    Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                    neque sed, porttitor metus. Etiam euismod ipsum libero
                </ul>
            </li>
            <li className='policy__subtitle'>
                Use of Personal Information
                <ul className='policy__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                    Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                    neque sed, porttitor metus. Etiam euismod ipsum libero
                </ul>
            </li>
            <li className='policy__subtitle'>
                Use of Personal Information
                <ul className='policy__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                    Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                    neque sed, porttitor metus. Etiam euismod ipsum libero
                </ul>
            </li>
        </ol>

        <div className='policy__note'>
            <BsExclamationCircle className='policy__icon' />
            <p className='policy__note-text'>
                Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                neque sed, porttitor metus. Etiam euismod ipsum libero
            </p>
        </div>

        <h1 className='policy__title'>
            Policy
        </h1>

        <ol>
            <li className='policy__subtitle'>
                Use of Personal Information
                <ul className='policy__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                    Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                    neque sed, porttitor metus. Etiam euismod ipsum libero
                </ul>
            </li>
            <li className='policy__subtitle'>
                Use of Personal Information
                <ul className='policy__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                    Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                    neque sed, porttitor metus. Etiam euismod ipsum libero
                </ul>
            </li>
            <li className='policy__subtitle'>
                Use of Personal Information
                <ul className='policy__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                    Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                    neque sed, porttitor metus. Etiam euismod ipsum libero
                </ul>
            </li>
        </ol>

        <div className='policy__note'>
            <BsExclamationCircle className='policy__icon' />
            <p className='policy__note-text'>
                Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor porta est, vel aliquam libero convallis eu.
                Quisque semper ante at turpis efficitur interdum. Morbi sit amet blandit libero, id faucibus dui. Proin a sem hendrerit, auctor
                neque sed, porttitor metus. Etiam euismod ipsum libero
            </p>
        </div>
    </div>
);

export default Policy;

