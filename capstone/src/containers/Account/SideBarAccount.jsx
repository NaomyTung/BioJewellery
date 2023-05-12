import React from "react";
import { Stack } from "@mui/material";
import { accountCategory } from '../../constants';
import './SideBarAccount.css'
import { MdAccountCircle } from 'react-icons/md';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

function SideBarAccount({ selectedCategory, setSelectedCategory }) {

    const { user } = useSelector(
        (state) => state.auth
    )

    return (
        <div className="account__sidebar">
        <div class="grid-container">
            <Stack
                direction="row"
                sx={{
                    // overflowY: "auto",
                    height: 'auto',
                    flexDirection: { md: "column" },
                    alignItems: 'right',
                }}
            >

                <div className="account__sidebar-img">
                    {/* <img src={images.avatar} alt="G_overlay" /> */}
                    <MdAccountCircle className="sidebar-icons" />
                    <h1>
                        {user.user.name}
                    </h1>
                </div>

                {accountCategory.map((category) => (
                    <Link to={category.route}>
                        <button
                            className="category-btn account__grid-item"
                            onClick={() => setSelectedCategory(category.name)}
                            style={{
                                background: category.name === selectedCategory && "#bcf6b1",
                                color: "#000000",
                            }}
                            key={category.name}
                        >
                            <span style={{ color: category.name === selectedCategory ? "black" : "#072d2e" }} className='account__grid-item'>
                                {category.icon}
                            </span>
                            <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }} className='account__grid-item sidebar__content'>
                                {category.name}
                            </span>
                        </button>
                    </Link>
                ))}
            </Stack>
        </div>
    </div>
    )

    
}

export default SideBarAccount;