/*
// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023
 
// Description: This component will display a set of stars
// Precondition: Must have a number in the input to display the amount of stars
// Postcondition: Displays  a set of stars
 
// Input 
starRating: int -- Amount of stars of the review
// Output
An group of stars that filled or unfilled base on the input

*/
import React from 'react';
import { BsStar, BsFillStarFill } from 'react-icons/bs';
import './Rating.css';

const Rating = ({ starRating }) => {
    var stars = Array(5);
    for (let i = 0; i < stars.length; i++) {
        stars[i] = starRating >= (i + 1) ? <BsFillStarFill /> : <BsStar />
    }
    return (
        stars
    );
};

export default Rating;