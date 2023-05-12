// Author: Nicholas Proc, Sri Guru
// Version: 1.1
// Date: 15/03/2023

// Description: This component displays the "subtotal" and renders "PayButton" for "proceed to checkout" button

import React from 'react';
import './CartSummary.css';
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';
import { PayButton } from '..';
import { selectSubtotal} from '../../features/cartFeatures/cartSlice';
const CartSummary = () => {
    const { isError, message } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const subtotal = useSelector(selectSubtotal);
    useEffect(() => {
        if (isError) {
            console.log(message);
        }
       

    }, [isError, message])
    return (
       
        <div className='cart__summary'>
            <div className='cart__summary-header'>
                <h1>
                    Subtotal
                </h1>

                <h1>
                    CA${subtotal.toFixed(2)}
                </h1>
            </div>

            <div className='cart__summary-action'>
                <PayButton />
            </div>
        </div>
    )
};

export default CartSummary;