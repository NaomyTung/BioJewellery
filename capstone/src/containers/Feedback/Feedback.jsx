// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 7/2/2023

// Description: This is the login page
// Precondition: A login page that contains the login form and proper styling
// Postcondition: Login page reformatting

// Input: Currently no input available
// Output: Currently no specific output

import React, { useState } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import './Feedback.css';
import { getProductByName, reset } from '../../features/productFeatures/productSlice';
import { createReview } from '../../features/reviewFeatures/reviewSlice';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Feedback = () => {
    const [title, setTitle] = useState('');
    const [feedback, setFeedback] = useState('');    
    const [rating, setRating] = useState(0);
    const {user} = useSelector((state) => state.auth);
    const { selectedProduct, isError, message } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { name } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
           
        const formData = { 
            "rating": rating, 
            "title":title,
            "comment":feedback, 
            "userId":user.user._id,
            "productId":selectedProduct._id
        } 

        dispatch(createReview(formData))
        navigate("/products/"  + selectedProduct.name)
    };

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        dispatch(getProductByName(name))
       
      
        return () => {
            dispatch(reset())
        }
    }, [isError, message, dispatch])


    const handleStarClick = (star) => {
        setRating(star);
    }

    return (
        <div className='feedback'>
            <div className="feedback__wrapper">
                <img src={images.feedback} alt="G_overlay" className='feedback__left' />
                <h1 className='HeaderText left '></h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='right feedback__form'>
                    <SubHeading title={"Feedback"} />

                    <p className='feedback__p'>
                        Your feedback always matters!
                    </p>

                    <div className='feedback__input'>
                        {
                            [...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <span key={i} onClick={() => handleStarClick(ratingValue)}>
                                        {ratingValue <= rating ? "\u2605" : "\u2606"}
                                    </span>
                                )
                            })
                        }
                        
                        <input
                            className='feedback__input-search'
                            type="text"
                            id="title"
                            placeholder="Title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />

                        <textarea
                            className='feedback__input-search-feedback'
                            type="text"
                            id="feedback"
                            placeholder="Feedback"
                            value={feedback}
                            onChange={(event) => setFeedback(event.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="feedback__button">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;