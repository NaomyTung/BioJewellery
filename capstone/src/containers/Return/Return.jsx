// Author: Nicholas Proc, Naomy T
// Version: 0.1 
// Date: 20/1/2023

// Description: This container is for display the information of a product
// Precondition: There must be a product that can be displayed
// Postcondition: Displays the Product details with the relavent information

// Input 
// N/A
// Output
// Product Detail Container

import React, { useState } from 'react';
import { SubHeading } from '../../components';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import './Return.css';
import { Footer } from '../../containers';
import { Navbar, SideBarAccount } from '../../components';
import { fetchFromAPI } from '../../constants';
import { Box, Stack } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import { returnRequest, reset } from '../../features/returnFeatures/returnSlice';
import 'react-toastify/dist/ReactToastify.css';

const Return = () => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (e) => {
        setSelectedOption(e.target.value);
    }

      const [invoice, setInvoice] = useState('');
      const [content, setContent] = useState('');
      
      const dispatch = useDispatch()
    
      const { isError, isSuccess, message } = useSelector(
        (state) => state.return
      )
      const { user } = useSelector(
        (state) => state.auth
      )

      const email  = user.email
    
    
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
            toast.success('Email was successfully sent. We will get back to you soon!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setInvoice("");
            setContent("");
            
        }

        dispatch(reset())
    
    
      }, [ isError, isSuccess, message])
    
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        const userData = {
          email,
          content,
          invoice,
          
        }
    
        dispatch(returnRequest(userData))
      }

    return (
        <div>
            <Navbar />
            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>

            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "0px solid #3d3d3d", px: { sx: 3, md: 2 } }}>
                <SideBarAccount selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className="app__gallery return app__section-padding">
                        
                        <div>
                            <SubHeading title='Return Product' />
                        </div>

                        <form onSubmit={onSubmit}>
                            <ToastContainer />

                            <div className='return__product-text'>
                                <p>
                                    Kindly complete the form and we will be in touch with you shortly.
                                </p>                                
                            </div>                       

                            <div className='return__product-text'>
                                <textarea 
                                    placeholder='Enter invoice number.'
                                    id="invoice"
                                    name="invoice"
                                    value={invoice}
                                    onChange={(event) => setInvoice(event.target.value)}
                                    required
                                />

                                
                                <textarea 
                                    rows="5" 
                                    placeholder='Could you kindly let us know what was the issues with the product?'
                                    id="content"
                                    name="content"
                                    value={content}
                                    onChange={(event) => setContent(event.target.value)}
                                    required
                                />

                                <button type="submit" className="return__button">Submit Claim</button>  
                            </div>         
                         
                        </form> 
                    </div >
                </Box>
            </Stack>
            <Footer />
        </div>
    )
};


export default Return;