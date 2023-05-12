// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023

// Description: This container is for display the information of a product
// Precondition: There must be a product that can be displayed
// Postcondition: Displays the Product details with the relavent information

// Input 
// N/A
// Output
// Product Detail Container

import React from 'react';
import { ProductDetailBar } from '../../components';
import './ProductDetail.css';
import SwitchDetail from '../../components/SwitchProductDetail/SwitchProductDetail';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProductByName, reset } from '../../features/productFeatures/productSlice';
import { getAllReviews } from '../../features/reviewFeatures/reviewSlice'

const ProductDetail = () => {

    const { selectedProduct, isError, message } = useSelector((state) => state.products);
    let { name } = useParams();
    const dispatch = useDispatch();
   
    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        dispatch(getProductByName(name))
        dispatch(getAllReviews(name));
      
        return () => {
            dispatch(reset())
        }
    }, [name,isError, message, dispatch])
  

    return (
        <div className="app__gallery app__section-padding">
            <div className='detail'>
                <h1 className="detail__headtext">
                    {selectedProduct.name}
                </h1>

                <img
                    className="detail__product-image"
                    src={selectedProduct.imageUrl}
                    alt="product image"
                />

                <div className='detail__sidebar'>
                    <ProductDetailBar />
                </div>

                <div>
                    <SwitchDetail  productName= {name}/>
                </div>
            </div>
        </div>
    )
};


export default ProductDetail;