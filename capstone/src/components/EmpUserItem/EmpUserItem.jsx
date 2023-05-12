import React from 'react';
import { useState } from "react";
import { images } from '../../constants';
import { Switch } from 'antd';
import './EmpUserItem.css';

const EmpUserItem = () => {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    const [isDisabled, setIsDisabled] = useState(true);

    const handleToggle = () => {
        setIsDisabled((prevIsDisabled) => !prevIsDisabled);
    };

    return (
        <div>
            <div className='emp__user-item' style={{ opacity: isDisabled ? 0.5 : 1 }} disabled={isDisabled}>
                <div className='emp__product-item-img'>
                    <div className="emp__user-img">
                        <img src={images.avatar} alt="G_overlay" />
                    </div>
                </div>

                <div className='emp__product-item-detail'>
                    <div className='emp__product-item-category'>
                        <h1>
                            UserName:
                        </h1>

                        <h1>
                            Email:
                        </h1>
                    </div>

                    <div className='emp__product-item-description'>
                        <h1>
                            Ya Boi
                        </h1>

                        <h1>
                            yaboi@gmail.com
                        </h1>

                        <div className='emp__product-item-action'>
                            <div className='emp__product-item-toggle'>
                                <Switch onClick={handleToggle} />
                                {/* {toggle ?
                                <span>
                                    true
                                </span>
                                :
                                <span>
                                    false
                                </span>} */}

                                {/* {isDisabled ? "Disable" : "Enable" } */}

                                {/* <button className='emp__product-item-button'>
                                Edit
                            </button> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className='emp__product-item' style={{ opacity: isDisabled ? 0.5 : 1 }} disabled={isDisabled}>
                <div className='emp__product-item-img'>
                    <div className="emp__user-img">
                        <img src={images.avatar} alt="G_overlay" />
                    </div>
                </div>

                <div className='emp__product-item-detail'>
                    <div className='emp__product-item-category'>
                        <h1>
                            UserName:
                        </h1>

                        <h1>
                            Email:
                        </h1>
                    </div>

                    <div className='emp__product-item-description'>
                        <h1>
                            Ya Boi
                        </h1>

                        <h1>
                            yaboi@gmail.com
                        </h1>

                        <div className='emp__product-item-action'>
                            <div className='emp__product-item-toggle'>
                                <Switch onClick={handleToggle} />
                                {/* {toggle ?
                    <span>
                        true
                    </span>
                    :
                    <span>
                        false
                    </span>} */}

                                {/* {isDisabled ? "Disable" : "Enable" } */}

                                {/* <button className='emp__product-item-button'>
                    Edit
                </button> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpUserItem;