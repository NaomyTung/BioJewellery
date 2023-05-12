// Author: Buola Achor, Naomy Tung
// Version 0.2
// Date: 16/1/2023

// Description: This is the employee side menu
// Precondition: A employee page already existing 
// Postcondition: direct to pages highlighted by text

// Input: Currently no input available
// Output: Currently no specific output

// Notes: large gap between profile and text



import React from 'react';

import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { ImParagraphLeft } from "react-icons/im";
import { BsPersonCheckFill } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi"; 

import './EmployeeMenu.css';
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { logout, reset } from '../../features/accountFeatures/accountSlice'
import { useState } from 'react';


const EmployeeMenu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isSuccess } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
  
        if (isSuccess) { 
          dispatch(reset())
          navigate('/')
          //make the page reload
          window.location.reload(false);
        }
    
       
      }, [isSuccess, navigate, dispatch])

    const logoutClick = () => {
        dispatch(logout(user))
    }

    return (
        <div className="employee__menu" class="employee">

            <div className="employee__text">

                    <div className="employee__photo">
                        <CgProfile color='#818181' size={120} />
                    </div>
                    
                    <div className="employee__photo-arrow"> 
                        <IoIosArrowDown color='#818181' size={20} />
                    </div>

                        <div className="employee__name">
                            <a href="#Settings">Hailey Johnson</a>
                        </div>

                    <div className="e__photo-edit"> 
                        <HiPencilAlt color='#818181' size={30} />
                    </div>
                
                        <div className="e__edit">
                            <a href="#Edit">Edit Page</a>
                        </div>

                    <div className="e__return-person"> 
                        <BsPersonCheckFill color='#818181' size={30} />
                    </div>
                
                        <div className="e__return">
                            <a href="#Return">Return Requests</a>
                        </div>

                    <div className="e__kpi-bars"> 
                        <ImParagraphLeft color='#818181' size={30} />
                    </div>

                        <div className="e__kpi">    
                            <a href="#View">View KPIs</a>
                        </div>

                    <div className="e__products-grid"> 
                        <TbGridDots color='#818181' size={30} />
                    </div>
                    
                        <div className="e__products">    
                            <a href="#Products">Manage Products</a>
                        </div>

                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /><br /> 
                        <div className="e__products">    
                            <a onClick={logoutClick}>Logout</a>
                        </div>
            </div>
        </div>  
    )
}

export default EmployeeMenu;