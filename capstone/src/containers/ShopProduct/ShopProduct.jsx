// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023

// Description: This container is for displaying a list of products
// Precondition: Must have a list of products
// Postcondition: Display a list of products

// Input 
// N/A
// Output
// ShopProduct Container


import React from 'react';
import { ProductItems } from '../../components';
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from '../../features/productFeatures/productSlice';
import { useEffect } from "react";
import './ShopProduct.css';

const ShopProduct = () => {

    const dispatch = useDispatch();

    const { products, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getProducts())

    }, [isError, message, dispatch])

    return (
        <div className="product product__section-padding" id="blog">
            <div className="product__container">
                <div>
                    {products.length > 0 ? (
                        <div className="product__container-card">
                            {products.map((product) => (<ProductItems
                                key={product._id}
                                product={product}
                                imgUrl={product.imageUrl}
                            />))}
                        </div>
                    ) : (<h3>You have not set any products</h3>)}
                </div>
            </div>
        </div >
    )
}

export default ShopProduct