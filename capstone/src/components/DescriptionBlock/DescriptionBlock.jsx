import React from 'react';
import Rating from '../Rating/Rating';
import './DescriptionBlock.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
const DescriptionBlock = () => {

    var stars = 5;

    const { selectedProduct, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

    }, [isError, message])

    return (
        <div>
            <div className='description'>
                <div className='description__category'>
                    <p>
                        Product Name:
                    </p>

                    <p>
                        Description:
                    </p>

                    <p>
                        Ratings:
                    </p>
                </div>

                <div className='description__detail'>
                    <p>
                        {selectedProduct.name}
                    </p>

                    <p>
                        {selectedProduct.description}
                    </p>
                  

                    <div className="description__rating">
                        <Rating starRating={stars} />
                    </div>

                </div>
            </div>

            <div className='description__small'>
                <div>
                    <p className='description__category-small'>
                        Product Name:
                    </p>

                    <p className='description__detail-small'>
                        {selectedProduct.name}
                    </p>

                    <p className='description__category-small'>
                        Product Type:
                    </p>

                    <p className='description__detail-small'>
                        {selectedProduct.type}
                    </p>

                    <p className='description__category-small'>
                        Color:
                    </p>

                    <p className='description__detail-small'>
                        {selectedProduct.colour}
                    </p>

                    <p className='description__category-small'>
                        Ratings:
                    </p>

                    <div className="description__rating">
                        <Rating starRating={stars} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionBlock;