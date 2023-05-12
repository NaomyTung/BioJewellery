import React from 'react';
import './Title.css';

const Title = ({ title, text }) => (
    <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
            <h1>{title}</h1>
            <div />
        </div>
        <div className="gpt3__features-container_feature-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Title;