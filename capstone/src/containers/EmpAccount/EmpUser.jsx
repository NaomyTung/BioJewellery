import React from 'react';
import { useEffect, useState } from "react";
import { Navbar, EmpUserItem } from '../../components';
import { fetchFromAPI } from '../../constants';
import { Box, Stack } from "@mui/material";
import './EmpUser.css';
import EmpSidebar from "./EmpSidebar";

const EmpUser = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

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
                            Manange Users
                        </h1>

                        {/* <button className='emp__manage-add'>
                            <AddIcon className='emp__manage-icon ' />
                        </button> */}

                        <div className='emp__manage-search'>
                            <input className='navbar-input-search' type='text' placeholder='Search BioJewellery Users' />
                        </div>

                        <div className='emp__manage-product'>
                            <EmpUserItem />
                        </div>
                    </div>
                </Box>
            </Stack>
        </div>
    )
}
export default EmpUser;