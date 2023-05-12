import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { fetchFromAPI } from '../../constants';
import { ShopSidebar } from '../../components';
import ShopProduct from "../ShopProduct/ShopProduct";
import './Feed.css';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "0px solid #3d3d3d", px: { sx: 3, md: 2 } }}>
                <ShopSidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <div className="feed__title">
                    <h2>
                        {selectedCategory}
                    </h2>
                </div>

                <ShopProduct />
            </Box>
        </Stack>
    );
};

export default Feed;