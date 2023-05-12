// Author: Ling Shan Matthew Ng
// Version 0.1
// Date: 18/1/2023

// Description: This is the gallery container
// Precondition: A gallery container that has a functioning carousel
// Postcondition: Gallery container with a fully functional carousel

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the header text in carousel scroll with the images
// Notes: Images used will remain the same for now
// Notes: May consider about the color theme of the arrows 

import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import { Link } from 'react-router-dom'; 
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        }
        else {
            current.scrollLeft += 300;
        }
    }

    return (
        <div className="gallery ">
            <div className="gallery__content">
                <h1 className='gallery__subheading'>
                    Popular Products
                </h1>

                <p className="app__p" style={{ marginTop: '2rem' }}>
                    Numbers don't lie, check out our most popular from our collection
                </p>
                
                <Link to="/categories">
                <button type="button" className="app__button" style={{ marginTop: '2rem' }}>
                    View More
                </button>
                </Link>
            </div>


            <div className="gallery__images">
                <div className="gallery__images-container" ref={scrollRef}>

                    {galleryImages.map((image, index) => (
                        <div
                            className="gallery__images-card app__flex-center"
                            key={`gallery_image-${index + 1}`}
                        >

                            <img
                                src={image}
                                alt="gallery_image"
                            />

                            <BsInstagram className="gallery__images-icon" />
                        </div>
                    ))}
                </div>

                <div className='gallery__images-arrows'>
                    <BsArrowLeftShort
                        className="gallery__arrows-icon"
                        onClick={() => scroll('left')}
                    />

                    <BsArrowRightShort
                        className="gallery__arrows-icon"
                        onClick={() => scroll('right')}
                    />
                </div>
            </div>
        </div>
    )
};

export default Gallery;