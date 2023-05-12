import React from "react";
import { Stack } from "@mui/material";
import { sortCategory } from '../../constants';
import './SideBar.css'

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
    <div className="sidebar">
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
                {sortCategory.map((category) => (
                    <button
                        className="category-btn grid-item"
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            background: category.name === selectedCategory && "#bcf6b1",
                            color: "#000000",
                        }}
                        key={category.name}
                    >
                        <span style={{ color: category.name === selectedCategory ? "#072d2e" : "#DCCA87" }} className='grid-item'>
                            {category.icon}
                        </span>
                        <span style={{ color: category.name === selectedCategory ? "#072d2e" : "#DCCA87" }} className='grid-item sidebar__content'>
                            {category.name}
                        </span>
                    </button>
                ))}
            </Stack>
        </div>
    </div>
);

export default SideBar;