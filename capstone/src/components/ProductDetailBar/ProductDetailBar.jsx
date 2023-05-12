// Author: Matthew, Sri, Naomy, Buola, Nicholas
// Version: 0.1 
// Date: 20/1/2023

// Description: This container is for display the information of a product
// Precondition: There must be a product that can be displayed
// Postcondition: Displays the Product details with the relavent information

// Input
// Output
// Product Detail Container

import React, { useState } from "react";

import { images } from '../../constants';
import { Rating } from '../../components';
import { Link } from "react-router-dom";
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect } from "react";
import './ProductDetailBar.css';
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from '../../features/cartFeatures/cartSlice';
const productImage = images.gallery01;

const ProductDetailBar = () => {
    const { selectedProduct, isError, message } = useSelector((state) => state.products);
    const { reviews } = useSelector((state) => state.review);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isError) {
            console.log(message);
        }

    }, [isError, message])

    let stars = 5;

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);

    };

    const [isTrue, setIsTrue] = useState(true);

    const textColorStyle = {
        color: isTrue ? 'rgb(75, 172, 75)' : 'rgb(195, 40, 40)'
    };

    const icon = isTrue ? <BsCheckCircleFill /> : <BsFillXCircleFill />;

    return (
        
        <div className="detail__bar">
            <h1>
                {selectedProduct.name}
            </h1>

            <div className="detail__small-bar-col">
                <p>
                    Price ${selectedProduct.price + ''}
                </p>

                <div className="detail__bar-status ">
                    <p style={textColorStyle} onChange={() => setIsTrue(!isTrue)}>
                        {isTrue ? 'In Stock' : 'Out of Stock'}
                    </p>

                    <div className='detail__bar-icons' style={textColorStyle} onChange={() => setIsTrue(!isTrue)} >
                        {icon}
                    </div>
                </div>
            </div>
            <div className="detail__bar-dropdown">
                <select value={selectedValue} onChange={handleChange}>
                    <option value="">Select a quantity</option>
                    {[...Array(11).keys()].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
            </div>


            <Link to="/cart">
                <button className="detail__bar-add-button" onClick={() => dispatch(addItemToCart({ 'productName': selectedProduct.name, 'productPrice': selectedProduct.price, 'quantity': Number.parseInt(selectedValue) }))}>
                    <FaShoppingCart />  Add to Cart
                </button>
            </Link>

            <div className="detail__bar-rating">
                <Rating starRating={stars} />
            </div>


            <Link to={"/feedback/" + selectedProduct.name}>
                <button className="detail__bar-review-button">
                    Write a review
                </button>
            </Link>

        </div>
    )
};

export default ProductDetailBar;