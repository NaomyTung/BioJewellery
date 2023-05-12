import React from 'react';
import './Article.css';
import { Link, useParams } from "react-router-dom"

const Article = ({ imgUrl, text, link }) => {
    const { id } = useParams()
    return (
        <>
            <div className="category__card">
                <div className="category__card-image">
                    <img src={imgUrl} alt="blog" />

                    <div class='category__card-content'>
                        <h3 >
                            {text}
                        </h3>

                        <button class='click__button'>
                            <Link to={link}>Click</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article
