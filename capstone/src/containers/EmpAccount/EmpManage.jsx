import React from 'react';
import { useEffect, useState } from "react";
import { Navbar, EmpProductItem } from '../../components';
import { Box, Stack } from "@mui/material";
import './EmpManage.css';
import EmpSidebar from "./EmpSidebar";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from '../../features/productFeatures/productSlice';

const EmpManage = (props) => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("Products");
    const { products, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getProducts())

    }, [isError, message, dispatch])

    return (
        <div>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
                    <EmpSidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className='emp__manage'>
                        <h1 className='emp__manage-header'>
                            Manange Products
                        </h1>

                        

                        {/* <div className='emp__manage-search'>
                            <input className='navbar-input-search' type='text' placeholder='Search BioJewellery Products' />
                        </div> */}

                        {products.length > 0 ? (
                           
                            <div className="emp__manage-product">
                                {products.map((product) => (<EmpProductItem
                                    key={product._id}
                                    product={product}
                                />))}
                            </div>
                        ) : (<h3>You have not set any products</h3>)}

                    </div>
                </Box>
            </Stack>
        </div>
    )
}
export default EmpManage;