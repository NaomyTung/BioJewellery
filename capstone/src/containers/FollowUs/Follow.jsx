import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import './Follow.css';

const Follow = () => (
    <div className='app__bg app__section-padding' id='follow'>

        <div className='follow__context'>
            <h1 className="follow__h1">
                Follow Us

            </h1>

            <p className='follow__p'>
                Get in touch and follow us for the latest news
            </p>
        </div>

        <div className='follow__card'>
            <div className='follow__card-links'>
                <div className='follow__card-align'>
                    <div className='follow__icons'>
                        <FiInstagram />
                    </div>
                </div>

                <div className='follow__card-align'>
                    <div className='follow__icons'>
                        <FaTiktok />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Follow;