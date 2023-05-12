// Author: Matthew, Sri
// Version: 1.1
// Date: 17.03.2023

// Description: This component displays items in cart with price and qunatity. 
// Options for Update quantity and delete item

import React from 'react';
import './CartContent.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { increaseItemQuantity, decreaseItemQuantity, deleteCartItem } from '../../features/cartFeatures/cartSlice';
const CartContent = () => {
    const { cartProducts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {


    }, [dispatch, cartProducts]);

    const [number, setNumber] = useState(0);

    function handleIncrement() {
        setNumber(number + 1);
    }

    function handleDecrement() {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    return (
        <div>
            {cartProducts.length > 0 ?
                <div>
                    <div className='cart__content'>
                        <div className='cart__content-card'>
                            <h1>
                                Product
                            </h1>

                            {cartProducts.map((item) => (
                                <p>
                                    {item.productName}
                                </p>

                            ))}
                        </div>

                        <div className='cart__content-card'>
                            <h1>
                                Price
                            </h1>

                            {cartProducts.map((item) => (
                                <p>
                                    CA${item.productPrice}
                                </p>
                            ))}
                        </div>

                        <div className='cart__content-card'>
                            <h1>
                                Quantity
                            </h1>

                            {cartProducts.map((item) => (
                                <div className='cart__content-action'>
                                    <button onClick={() => dispatch(increaseItemQuantity(item))}>+</button>
                                    <p>
                                        {item.quantity}
                                    </p>
                                    <button onClick={() => dispatch(decreaseItemQuantity(item))}>-</button>
                                    <button onClick={() => dispatch(deleteCartItem(item.productName))}>
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='cart__content-small'>
                        <div className='cart__content-small-name'>
                            <h1>
                                Product
                            </h1>

                            {cartProducts.map((item) => (
                                <p>
                                    {item.productName}
                                </p>

                            ))}
                        </div>

                        <div className='cart__content-small-detail'>
                            <div>
                                <h1>
                                    Price
                                </h1>

                                {cartProducts.map((item) => (
                                    <p>
                                        CA${item.productPrice}
                                    </p>
                                ))}
                            </div>

                            <div>
                                <h1>
                                    Quantity
                                </h1>

                                {cartProducts.map((item) => (
                                    <div className='cart__content-action'>
                                        <button onClick={() => dispatch(increaseItemQuantity(item))}>+</button>
                                        <p>
                                            {item.quantity}
                                        </p>
                                        <button onClick={() => dispatch(decreaseItemQuantity(item))}>-</button>
                                        <button onClick={() => dispatch(deleteCartItem(item.productName))}>
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='cart__content-empty'>
                    <h1>Cart is empty!</h1>
                </div>
            }
        </div>
    );
};

export default CartContent;