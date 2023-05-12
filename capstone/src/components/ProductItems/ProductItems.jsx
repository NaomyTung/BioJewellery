// Author:  Nicholas, Naomy, Sri, Buola, Matthew

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItems.css';
const ProductItems = ({ imgUrl, product }) => {

    return (
        <div className="product__item">
            <div className="product__item-image">
                <Link to={"/products/" + product.name}>
                    <img src={imgUrl} alt={product.name} />
                </Link>
            </div>

            <div className="product__item-content">
                <div className='product__item-name'>
                    <Link to={"/products/" + product.name} >
                        {product.name}
                    </Link>
                    <h4>${product.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductItems