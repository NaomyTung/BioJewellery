// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023
 
// Description: This Component is to display a customer review. It displays the Username, Title, Description and the rating of the product.
// Precondition: There must be a product and a review associated with the product.
// Postcondition: Displays the review with the relavent information
 
// Input 
// customerUsername: String -- Username of the reviewer
// customerTitle: String -- Title of the review
// customerDescription: String -- Description of the review
// reviewStarRating: int -- Amount of stars of the review
// reviewLink: string -- Link for product
// Output
// ReviewBlock component

import React from 'react';
import './ShopProductIcon.css';
import { Link, useParams } from "react-router-dom"

const ShopProductIcon = ({ productImage,productTitle, productPrice, productLink }) => {
    //it will be used too know what produuct it is being stored under product in the URL
    const {product} = useParams()
    return (
        <div>
            <div>
                <Link to={productLink}><img src={productImage} alt="" /></Link>
            </div>
           <div>
                <p>{productTitle}</p>
                <p>{productPrice}</p>
           </div>
        </div>
    );
};

export default ShopProductIcon;