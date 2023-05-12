import React, { useEffect, useState } from "react";
import { images } from '../../constants';
import { Navbar } from '../../components';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { fetchFromAPI } from '../../constants';
import { Box, Stack } from "@mui/material";
import './EmpAccount.css';
import EmpSidebar from "./EmpSidebar";

const EmpAccount = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    const { checked, onChange } = props;

    return (
        <div>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
                    <EmpSidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className="emp-account">
                        <div className="emp-account__table">
                            <div className="emp-account__table-column1">
                                <h1 className='emp-account__header'>
                                    Account Information
                                </h1>

                                <div className="emp-account__avatar">
                                    <img src={images.avatar} alt="G_overlay" className="blur" />

                                    <div className="emp-account__overlay">
                                        <ModeEditIcon className="emp-account__icon" />
                                    </div>
                                </div>

                                <h3>Username</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="username"
                                        placeholder="Enter Username"
                                    />
                                </div>

                                <h3>Password</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="password"
                                        id="password"
                                        placeholder="Enter Password"
                                    />
                                </div>

                                <h3>Confirm Password</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="password"
                                        id="password"
                                        placeholder="Confirm Password"
                                    />
                                </div>

                                <h1 className='emp-account__header-privillages'>
                                    Employee Privilages
                                </h1>

                                <div className="emp-account__check">
                                    <div className="emp-account__check-column2">
                                        <div className="emp-account__check-row">
                                            <input
                                                type="checkbox"
                                                id=""
                                                name=""
                                                checked={checked}
                                                onChange={onChange}
                                                style={{ borderRadius: '10px' }}
                                            />
                                            <p>Edit Images</p>
                                        </div>

                                        <div className="emp-account__check-row">
                                            <input type='checkbox' id="" name="" />
                                            <p>Edit Content</p>
                                        </div>

                                        <div className="emp-account__check-row">
                                            <input type='checkbox' id="" name="" />
                                            <p>Edit Videos</p>
                                        </div>
                                    </div>

                                    <div className="emp-account__check-column2">
                                        <div className="emp-account__check-row">
                                            <input type='checkbox' id="" name="" />
                                            <p>Respond Feedback</p>
                                        </div>

                                        <div className="emp-account__check-row">
                                            <input type='checkbox' id="" name="" />
                                            <p>Manage Return Requests</p>
                                        </div>

                                        <div className="emp-account__check-row">
                                            <input type='checkbox' id="" name="" />
                                            <p>View KPIs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="emp-account__table-column1">
                                <h1 className='emp-account__header'>
                                    Personal Information
                                </h1>

                                <h3>First Name</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter First Name"
                                    />
                                </div>

                                <h3>Last Name</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="lastname"
                                        placeholder="Enter Last Name"
                                    />
                                </div>

                                <h3>Email</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="email"
                                        placeholder="Enter Email Address"
                                    />
                                </div>

                                <h3>Phone Number</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="phone"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>

                                <h3>Address</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="address"
                                        placeholder="Enter Address"
                                    />
                                </div>

                                <div className="emp-account__small-table">
                                    <div className="emp-account__table-column2">
                                        <h3>City</h3>
                                        <br />
                                        <div className='emp-account__input-short'>
                                            <input
                                                className='emp-account__input'
                                                type="text"
                                                id="city"
                                                placeholder="City"
                                            />
                                        </div>

                                        <h3>Province</h3>
                                        <br />
                                        <div className='emp-account__input-short'>
                                            <input
                                                className='emp-account__input'
                                                type="text"
                                                id="province"
                                                placeholder="Province"
                                            />
                                        </div>
                                    </div>

                                    <div className="emp-account__table-column2">
                                        <h3>Postal Code</h3>
                                        <br />
                                        <div className='emp-account__input-short'>
                                            <input
                                                className='emp-account__input'
                                                type="text"
                                                id="postalCode"
                                                placeholder="Postal Code"
                                            />
                                        </div>

                                        <h3>Country</h3>
                                        <br />
                                        <div className='emp-account__input-short'>
                                            <input
                                                className='emp-account__input'
                                                type="text"
                                                id="country"
                                                placeholder="Country"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="emp-account__action">
                            <button>
                                Save
                            </button>

                            <button>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Box>
            </Stack>
        </div>
    );
};

export default EmpAccount;