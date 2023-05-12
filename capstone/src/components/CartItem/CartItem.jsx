// Author: Buola Achor
// Version 0.2
// Date: 18/1/2023

// Description: This is the shopping cart item. 
// Precondition: Items able to be added via button in previous pages
// Postcondition: removal of items

// Input: Currently no input available
// Output: Currently no specific output

import React from 'react';
import { Link, useParams } from "react-router-dom"
import productpic from '../../assets/gallery01.png'
import './CartItem.css';

const CartItem = () => {

    //Default Variable for review block
    var cartProductName = "Very Cool Name";
    var cartProductColor = "Default Title";
    var cartProductSize = "Default Description";
    var cartProductPrice = "Very Cool Name";
    var cartProductQuantity = "Default Title";

    return (
        <div className="cart__item">
            <table className='confirm__shipping-table'>
                <tr>
                    <td>Gold Leaf Necklace</td>
                    <td>Each</td>
                    <td>Quality</td>
                    <td>Total</td>
                </tr>
                <tr>
                    <td>Color: Gold</td>
                    <td>$100.00</td>
                    <td>1</td>
                    <td>$100.00</td>
                </tr>
                <tr>
                    <td colSpan={2}>17 Ave SW</td>
                </tr>
                <tr>
                    <td>Calgary</td>
                    <td>T3J 0H8</td>
                </tr>
                <tr>
                    <td>AB</td>
                    <td>Canada</td>
                </tr>
            </table>

            <table className='confirm__payment-table'>
                <tr>
                    <th rowSpan={5}>Payment Details</th>
                </tr>
                <tr>
                    <td>123 4567 8910</td>
                </tr>
                <tr>
                    <td>Bob Lee</td>
                </tr>
                <tr>
                    <td>012</td>
                </tr>
                <tr>
                    <td>01/29</td>
                </tr>
            </table>

            <table className='confirm__product-table'>
                <tr>
                    <th rowSpan={5}>Product Details</th>
                </tr>
                <tr>
                    <td>Gold leaf necklace</td>
                    <td rowSpan={5}>
                        <img src={productpic} alt="product_image" />
                    </td>
                </tr>
                <tr>
                    <td>1 qty</td>
                </tr>
                <tr>
                    <td>$1000.00</td>
                </tr>
                <tr>
                    <td>Warranty: 1 year from purchase</td>
                </tr>
            </table>
        </div>
    );
}

export default CartItem;