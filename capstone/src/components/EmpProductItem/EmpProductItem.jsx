import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Switch } from 'antd';
import './EmpProductItem.css';

const EmpProductItem = ({ product }) => {

    const [toggle, setToggle] = useState(true);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    const [isDisabled, setIsDisabled] = useState(false);

    const handleToggle = () => {
        setIsDisabled((prevIsDisabled) => !prevIsDisabled);
    };

    console.log(product)
    return (
        <div className='emp__product-item' style={{ opacity: isDisabled ? 0.5 : 1 }} disabled={isDisabled}>
           

            <div className='emp__product-item-detail'>
                <div className='emp__product-item-category'>
                    <h1>
                        Name
                    </h1>

                    <h1>
                        Price
                    </h1>

                    <h1>
                        Description
                    </h1>

                    <h1>
                        Stock
                    </h1>
                </div>

                <form action="">
                    <div className='emp__product-item-description'>
                        <h1>
                            {product.name}
                        </h1>

                        <h1>
                            ${product.price}
                        </h1>

                        <h1>
                            {product.description}
                        </h1>

                        <h1>
                            {product.quantity}
                        </h1>

                        <div className='emp__product-item-action'>
                            <div className='emp__product-item-toggle'>
                                {/* <Switch onClick={handleToggle} /> */}
                                {/* {toggle ?
                                <span>
                                    true
                                </span>
                                :
                                <span>
                                    false
                                </span>} */}

                                {/* {isDisabled ? "Disable" : "Enable" } */}

                                <Link to={ "/editproduct/" + product.name}>
                                    <button className='emp__product-item-button'>
                                        Edit
                                    </button>
                                </Link>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EmpProductItem;