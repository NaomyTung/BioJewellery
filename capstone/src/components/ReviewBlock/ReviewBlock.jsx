import React from 'react';
import Rating from '../Rating/Rating';
import './ReviewBlock.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { replyReview, removeReview } from '../../features/reviewFeatures/reviewSlice'
import { useNavigate } from "react-router-dom";

const ReviewBlock = ({ review }) => {
    const { user } = useSelector((state) => state.auth);
    console.log(user.user.type)
    const userType = {
        type: (user !== null || user !== undefined) ? user.user.type : "guest"
    }
    console.log(userType)
    const [showForm, setShowForm] = useState(false);
    const [replyText, setReplyText] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // call your onClick function here with replyText as a parameter
        console.log("Reply submitted:", replyText);
        setShowForm(false);
        setReplyText("");
    }

    const handleCancel = () => {
        setShowForm(false);
        setReplyText("");
    };

    const onClick = (e) => {
        e.preventDefault()

        dispatch(replyReview({ "reply": replyText, "reviewId": review._id }))
        window.location.reload();
    }

    const handleClick = () => {
        dispatch(removeReview(review._id))
        window.location.reload();
    }

    return (
        <div className='review'>
            <div className='review__header'>


                <div className="review__rating">
                    <Rating starRating={review.rating} />
                </div>

                <h3 className='review__header-title'>
                    {review.title}
                </h3>
            </div>

            <p className='review__detail'>
                {review.comment}
            </p>

            <p className='review__name'>
                {review.name}
            </p>


            {userType.type === "Admin" && review.reply === "false" &&
                <div>
                    <div className='review__admin_row'>
                        <button onClick={() => setShowForm(!showForm)} className="review__admin-button">
                            {showForm ? "Hide Reply Form" : "Reply"}
                        </button>

                        {userType.type === "Admin" &&
                            <div >
                                <button onClick={handleClick} className="review__admin-button">
                                    Remove
                                </button>
                            </div>
                        }
                    </div>

                    {showForm && (
                        <form onSubmit={handleSubmit} className='review__admin-form'>
                            <label className='review__admin-col'>
                                Reply:
                                <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                            </label>
                            <div className='review__admin-action'>
                                <button type="submit" onClick={onClick} className="review__admin-button">Reply</button>
                                <button type="button" onClick={handleCancel} className="review__admin-button">Cancel</button>
                            </div>

                        </form>
                    )}
                </div>
            }


            {review.reply !== "false" &&
                <div>
                    <h4 className='review__header-title'>
                        Biojewelry Response
                    </h4>
                    <p className='review__detail'>
                        {review.reply}
                    </p>
                </div>
            }
        </div>

    );
};

export default ReviewBlock;