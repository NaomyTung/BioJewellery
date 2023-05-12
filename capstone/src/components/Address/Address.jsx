// Author: Sri, Naomy, Nick, Buola, Matthew
// Version: 1.0
// Date: 14/03/2023

// Description: This component displays the shipping address with edit option

import './Address.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getAddress, updateAddress } from '../../features/addressFeatures/addressSlice';

const Address = () => {

    const { user } = useSelector((state) => state.auth)
    const { shippingAddress, isSuccess, isLoading, isError, message } = useSelector((state) => state.address)

    const [formData, setFormData] = useState({
        street: shippingAddress.street,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalCode,
        province: shippingAddress.province,
        country: shippingAddress.country
    })

    const [isDisabled, setIsDisabled] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getAddress(user.user._id));

    }, [user, navigate, isError, message, dispatch]);


    const changeHandler = (e) => {

        setFormData((prevState) => ({

            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const updateAddressHandler = () => {

        setIsUpdating(true);
        updateAddress(user.user._id, formData)
        dispatch(updateAddress(user.user._id, formData))
        setIsUpdating(false);
        setIsDisabled(true);
    }

    return (
        <>
            <div className='order__category'>
                <p className='order__detail-category'>
                    Shipping address
                </p>
            </div>

            <div className='order__detail-long'>
                <div>
                    <div>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={formData.street === undefined ? shippingAddress.street : formData.street}
                            disabled={isDisabled}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className='order__detail-short'>
                    <div>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city === undefined ? shippingAddress.city : formData.city}
                            disabled={isDisabled}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode === undefined ? shippingAddress.postalCode : formData.postalCode}
                            disabled={isDisabled}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className='order__detail-short'>
                    <div>
                        <input
                            type="text"
                            id="province"
                            name="province"
                            value={formData.province === undefined ? shippingAddress.province : formData.province}
                            disabled={isDisabled}
                            onChange={changeHandler}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country === undefined ? shippingAddress.country : formData.country}
                            disabled={isDisabled}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

            </div>
            <div className='order__button'>
                <button
                    className='order__button-action'
                    onClick={isDisabled ? () => { setIsDisabled(false) } : updateAddressHandler}
                    disabled={isUpdating}
                >
                    {isDisabled ? 'Update Address' : 'Confirm'}
                </button>
            </div>

        </>
    )
};

export default Address;