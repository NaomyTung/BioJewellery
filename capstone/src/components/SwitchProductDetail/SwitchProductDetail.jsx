import React, { useEffect, useState } from "react";
import { ReviewBlock, DescriptionBlock } from '..';
import { useDispatch, useSelector } from 'react-redux';
import './SwitchProductDetail.css';
import { getAllReviews } from '../../features/reviewFeatures/reviewSlice'
const SwitchProductDetail = (name) => {
    const detailswitch = ["Description", "Review"];
    const [myProfession, setMyProfession] = useState("Description");  
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.review.reviews);
    const { productName } = name;
    useEffect(() => {
            
        dispatch(getAllReviews(productName));
         
    }, [ dispatch])
    console.log("reviews:", reviews);

    return (
        <>
            <div className="switch">
                <br />
                <div
                    className="switch_tab"
                    role="group"
                    aria-label="Basic example"
                >
                    {detailswitch.map(profession => (
                        <button
                            type="button"
                            key={profession}
                            className={"switch__button"}
                            onClick={() => setMyProfession(profession)}
                        >
                            {profession}
                        </button>
                    ))}
                </div>
            </div>

            <div className="col text-center">
               
                    {myProfession === "Description" && (
                        <DescriptionBlock
                           
                        />
                    )}

{myProfession === "Review" && 
  (reviews.length > 0 ? reviews.map(review => (
    <ReviewBlock review={review} />
  )) : (
    <p>no reviews yet!</p>
  )) }
               
            </div>
        </>
    );
};

export default SwitchProductDetail;