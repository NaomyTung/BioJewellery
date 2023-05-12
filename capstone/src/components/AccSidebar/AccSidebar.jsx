// Author: Nicholas Proc, Naomy, Matthew, Buola, Sri
// Version: 0.1 
// Date: 20/1/2023

// Description: This component is for displaying a list of products
// Precondition: Must have a list of products
// Postcondition: Display a list of products

import React from 'react';

import { ProductItems } from '..';

import { images } from '../../constants';

import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from '../../features/productFeatures/productSlice';
import { useEffect } from "react";
import { sortProducts } from '../../features/productFeatures/productSlice';
import { Stack } from "@mui/material";
import { sortCategory } from '../../constants';

import './AccSidebar.css';

const AccSidebar = ({ selectedCategory, setSelectedCategory }) => {

    const dispatch = useDispatch();

    const { products, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getProducts())

        console.log("Products: " + products);
    }, [isError, message, dispatch])

    return (
        <div>
            <div className='shop__sidebar'>
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
                                    name={category.name}
                                    onClick={() => {
                                        setSelectedCategory(category.name)
                                        dispatch(sortProducts(category.name))
                                    }}
                                    style={{
                                        background: category.name === selectedCategory && "#07484A",
                                        color: "#07484A",
                                    }}
                                    key={category.name}
                                >
                                    <span className='grid-item'>
                                        {category.icon}
                                    </span>
                                    <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }} className='grid-item sidebar__content'>
                                        {category.name}
                                    </span>
                                </button>
                            ))}
                        </Stack>
                    </div>
                </div>
            </div>

            <div className='shop__sidebar-small'>
                <div className='shop__scroll'>
                    <button className='shop__category'>Popular</button>
                    <button className='shop__category'>Trending</button>
                    <button className='shop__category'>Sales</button>
                    <button className='shop__category'>Ascending</button>
                    <button className='shop__category'>Descending</button>
                </div>
            </div>
        </div>
    )
}

export default AccSidebar