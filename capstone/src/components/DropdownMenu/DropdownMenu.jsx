// Author: Naomy
// Version 1.0
// Date: 21/03/2023

import { DropdownItem } from '../../components';
import './DropdownMenu.css';
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { logout, reset } from '../../features/accountFeatures/accountSlice'
import { useState } from 'react';

const DropdownMenu = () => {

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
        <div className="flex flex-col dropdownMenu">
            <ul className='flex flex-col gap-4'>
                <DropdownItem text = {"Profile"} link={'/account'}/>
                <DropdownItem text = {"Claims"} link={'/claims'}/>
                <li className='dropdownItem'>
                    <a onClick={logoutClick}> Logout </a>
                </li>
            </ul>
        </div>
    )
}

export default DropdownMenu;

