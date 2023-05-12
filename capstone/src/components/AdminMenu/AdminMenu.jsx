// Author: Buola Achor
// Version 0.2
// Date: 16/1/2023

// Description: This is the admin side menu
// Precondition: A admin page already existing 
// Postcondition: direct to pages highlighted by text

// Input: Currently no input available
// Output: Currently no specific output

// Notes: large gap between profile and text

import React from 'react';

import { CgProfile } from 'react-icons/cg';
import { ImParagraphLeft } from 'react-icons/im';
import { BsFillSuitHeartFill, BsFillPeopleFill } from 'react-icons/bs';
import { FaRegClipboard } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

import './AdminMenu.css';

const AdminMenu = (profilePicture) => {

    return (
        <nav className="admin__menu" class="admin">
        
            <li className="admin__text">
                <div className="admin__photo">
                    {/* {profilePicture} */}
                    <CgProfile color='#818181' size={120} />
                </div>

                <h1 className="admin__name">Hornby Trung</h1>

                        <br></br>

                        <div className="a__icons">
                            <ImParagraphLeft color='#818181' size={30}/>
                        </div>

                        <div className="a__dash">
                            <a href="#Edit">Dashboards</a>
                        </div>

                        <div className="a__icons">
                            <BsFillSuitHeartFill color='#818181' size={30}/>
                        </div>

                        <div className="a__social">
                            <a href="#Return">Monitor Social Media</a>
                        </div>

                        <div className="a__icons">
                            <FaRegClipboard color='#818181' size={30}/>
                        </div>

                        <div className="a__employee">    
                            <a href="#View">Manage Employees</a>
                        </div>

                        <div className="a__icons">
                            <BsFillPeopleFill color='#818181' size={30}/>
                        </div>

                        <div className="a__user">    
                            <a href="#Products">Mange Users</a>
                        </div>

                        <div className="a__icons">
                            <AiOutlinePlus color='#818181' size={30}/>
                        </div>

                        <div className="a__admin">    
                            <a href="#Products">Add Admin</a>
                        </div>      
            </li>
        </nav>  
    )
}

export default AdminMenu;