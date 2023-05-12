// Author: Ling Shan Matthew Ng, Naomy Tung 
// Version 0.2
// Date: 7/2/2023

// Description: This is the login page
// Precondition: A login page that contains the login form and proper styling
// Postcondition: Login page reformatting

// Input: Currently no input available
// Output: Currently no specific output

import React from 'react';
import { useState } from 'react';
import { images } from '../../constants';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, Stack } from "@mui/material";
import { toast } from 'react-toastify';
import { forgetPassword, reset } from '../../features/accountFeatures/accountSlice';
import './Reset.css';

function Reset() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { message, isSuccess, isError} = useSelector(
      (state) => state.auth
    )

    const [accountEmail, setAccountEmail]  = useState({
        email: ''
    });	

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');
    const [isSuccessful, setSuccessful] = useState(false);

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (isError) {
            toast.error(message);
            setErrorMessage("Account does not exist!" + message);
        }     
  
        if (isSuccess) { 
          setsuccessMessage("Link was sent to your email. Please check your inbox.");
          setSuccessful(true);
          dispatch(reset());    
        }
           
      }, [isError, isSuccess, navigate, dispatch])
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        const userData = {
          email,
        }
    
        dispatch(forgetPassword(userData))
      }

    return (
        <>
            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={0} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
                    <div className="account">
                        <div className="account__table">
                            <div className="login__table-column1">
                                <div className="login__img">
                                    <img src={images.login} alt="G_overlay" className="blur" />
                                </div>
                            </div>

                            <div className="reset__table-column2">
                                <form onSubmit={onSubmit}>
                                    <div className='reset__header'>
                                        <h1>
                                            Forget Passowrd
                                        </h1>

                                        <p>Don't worry. We've got your back. </p>
                                    </div>


                                    {isError ? <p className='login__error-message'>{errorMessage}</p> : null}
                                    {isSuccessful ? <p className='login__success-message'>{successMessage}</p> : null}

                                    <input
                                        className='login__input'
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />

                                    <div className='login__lower-functions login__forget-link'>
                                        <br />
                                        <button type="submit" className="login__button">Send Conformation Email</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Stack>

        </>
    );
};

export default Reset;
