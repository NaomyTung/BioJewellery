import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack } from "@mui/material";
import SideBarAccount from "./SideBarAccount";
import { Footer } from '../../containers';
import { Navbar } from '../../components';
import { updateAccount, reset } from "../../features/accountFeatures/accountSlice";
import { ToastContainer, toast } from 'react-toastify';
import './Account.css';

const Account = () => {
    const dispatch = useDispatch()
    const { user, isSuccess, isError, message } = useSelector((state) => state.auth)


    const [formData, setFormData] = useState({
        email: user.email,
        name: user.user.name,
        street: user.address.street,
        city: user.address.city,
        postalCode: user.address.postalCode,
        province: user.address.province,
        country: user.address.country
    })

    const {name, street, city, postalCode, province, country} = formData

    const changeHandler = (e) => {

        setFormData((prevState) => ({

            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateAccount(formData));
        //window.location.reload();

    }

    const handlePasswordChange = (e) => {

    }


    const [selectedCategory, setSelectedCategory] = useState("Products");

    useEffect(() => {

        if (isError) {
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
        }
    
        if (isSuccess) {
            toast.success('Updated Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
        }

        dispatch(reset())        

    }, [isSuccess, isError, message]);

    return (
        <div>
            <Navbar />
            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "0px solid #3d3d3d", px: { sx: 3, md: 2 } }}>
                    <SideBarAccount selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className="account">
                        <form onSubmit={handleSubmit}>
                            <ToastContainer />

                            <div className="account__table">
                               

                                <div className="account__table-column1">
                                    <h1 className='account__header'>
                                        Personal Information
                                    </h1>


                                    <h3>Name</h3>
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Enter a names"
                                            value={name}
                                            onChange={changeHandler}
                                        />
                                    </div>


                                    <h3>Street address</h3>
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="street"
                                            name="street"
                                            placeholder="Enter Address your address"
                                            value={street}
                                            onChange={changeHandler}
                                        />
                                    </div>

                                    <div className="account__small-table">
                                        <div className="account__table-column2">
                                            <h3>City</h3>
                                            <br />
                                            <div className='account__input-short'>
                                                <input
                                                    className='account__input'
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    placeholder="City"
                                                    value={city}
                                                    onChange={changeHandler}
                                                />
                                            </div>

                                            <h3>Province</h3>
                                            <br />
                                            <div className='account__input-short'>
                                                <input
                                                    className='account__input'
                                                    type="text"
                                                    id="province"
                                                    placeholder="Province"
                                                    value={province}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="account__table-column2">
                                            <h3>Postal Code</h3>
                                            <br />
                                            <div className='account__input-short'>
                                                <input
                                                    className='account__input'
                                                    type="text"
                                                    id="postalCode"
                                                    name="postalCode"
                                                    placeholder="Postal Code"
                                                    value={postalCode}
                                                    onChange={changeHandler}
                                                />
                                            </div>

                                            <h3>Country</h3>
                                            <br />
                                            <div className='account__input-short'>
                                                <input
                                                    className='account__input'
                                                    type="text"
                                                    id="country"
                                                    name="country"
                                                    placeholder="Country"
                                                    value={country}
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="account__action">
                                <button
                                    type="submit"
                                >
                                    Save
                                </button>

                                <button>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Stack>
            <Footer />
        </div>
    );
};

export default Account;