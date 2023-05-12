import React, { useEffect, useState } from "react";
import { images } from '../../constants';
import { fetchFromAPI } from '../../constants';
import { Box, Stack } from "@mui/material";
import SideBarAccount from "./SideBarAccount";
import { Footer } from '../../containers';
import { Navbar } from '../../components';
import './AccountHistory.css';

const AccountHistory = () => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);
    const price = 100;
    const order_no = '23ru90h349v832v4';

    useEffect(() => {
        
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <div>
            <Navbar />
            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "0px solid #3d3d3d", px: { sx: 3, md: 2 } }}>
                    <SideBarAccount selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className="accountHistory">
                        <div className="accountHistory__product">
                            <div className="accountHistory__image">
                                <img src={images.avatar} alt="G_overlay" />
                            </div>

                            <div className="accountHistory__detail">
                                <h3>
                                    Order Number: {order_no}
                                </h3>

                                <p className="accountHistory__price">
                                    Total Price: ${price}
                                </p>

                                <div className="accountHistory__button">
                                    <button>
                                        Review
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="accountHistory__product">
                            <div className="accountHistory__image">
                                <img src={images.avatar} alt="G_overlay" />
                            </div>

                            <div className="accountHistory__detail">
                                <h3>
                                    Order Number: {order_no}
                                </h3>

                                <p className="accountHistory__price">
                                    Total Price: ${price}
                                </p>

                                <div className="accountHistory__button">
                                    <button>
                                        Review
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="accountHistory__product">
                            <div className="accountHistory__image">
                                <img src={images.avatar} alt="G_overlay" />
                            </div>

                            <div className="accountHistory__detail">
                                <h3>
                                    Order Number: {order_no}
                                </h3>

                                <p className="accountHistory__price">
                                    Total Price: ${price}
                                </p>

                                <div className="accountHistory__button">
                                    <button>
                                        Review
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="accountHistory__product">
                            <div className="accountHistory__image">
                                <img src={images.avatar} alt="G_overlay" />
                            </div>

                            <div className="accountHistory__detail">
                                <h3>
                                    Order Number: {order_no}
                                </h3>

                                <p className="accountHistory__price">
                                    Total Price: ${price}
                                </p>

                                <div className="accountHistory__button">
                                    <button>
                                        Review
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="accountHistory__product">
                            <div className="accountHistory__image">
                                <img src={images.avatar} alt="G_overlay" />
                            </div>

                            <div className="accountHistory__detail">
                                <h3>
                                    Order Number: {order_no}
                                </h3>

                                <p className="accountHistory__price">
                                    Total Price: ${price}
                                </p>

                                <div className="accountHistory__button">
                                    <button>
                                        Review
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Box>
            </Stack>
            <Footer/>
        </div>
    );
};

export default AccountHistory;