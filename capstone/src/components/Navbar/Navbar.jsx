// Author: Matthew, Sri, Naomy, Buola, Nicholas
// Version 1.0
// Date: 17/03/2023

// Description: Navbar for reuse
// Precondition: Navbar that's able to minimize logo when scrolling, search content inputted, navigate to respective pages
// Postcondition: Basic structure is made

// Input: Currently no input
// Output: Currently no output

// Notes: The animation of the logo will be done soon
// Notes: Styling of the search area will be modified soon

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom"
import { MdAccountCircle, MdOutlineClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { DropdownMenu } from '../../components';
import { DropdownMenuEmp } from '../../components';

const Navbar = () => {
    const navigate = useNavigate()
    const { itemCount } = useSelector((state) => state.cart);
    const { setAuthU }  = useState(false);	
    const { setAuthA }  = useState(false);

    const { user } = useSelector(
        (state) => state.auth
    )

    const useAuth = () => {
        const { user } = useSelector(
            (state) => state.auth
        )
    
        if (user && user.type==="Client") {
            setAuthU(true);	
        } 
        if (user && user.user.type==="Admin") {
            setAuthA(true);	
        }
       
    }

    const dispatch = useDispatch();

    useEffect(() => {


    }, [dispatch, itemCount]);

    const [toggleMenu, setToggleMenu] = React.useState(false);

    const [openDropdownMenu, setopenDropdownMenu] = useState(false);
    const [openDropdownMenuEmp, setopenDropdownMenuEmp] = useState(false);

    const onPerfilClick = () => {
        if (user && user.user.type==="Client") {
            setopenDropdownMenu(!openDropdownMenu);
        }
        else if(user && user.user.type==="Admin") {
            setopenDropdownMenuEmp(!openDropdownMenuEmp);
        }
        else {
            navigate('/login');
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={images.logo} alt="app__logo" />
            </div>

            <ul className="navbar-links">
                <li className="navbar-p">
                    <NavLink to="/">Home</NavLink>
                </li>

                <li className="navbar-p">
                    <NavLink to="/categories">Shop</NavLink>
                </li>

                <li className="navbar-p">
                    <NavLink to="/aboutus">About Us</NavLink>
                </li>
            </ul>

            

            <div className="navbar-input">
                <a href="/cart">
                    <FaShoppingCart className="navbar-icons" />
                </a>
                <p className='navbar-cart-count'>{itemCount}</p>
            </div>

            <div className="navbar-input">
                <a href="#" onClick={onPerfilClick}>
                    <MdAccountCircle className="navbar-icons" />
                </a>
            </div>
            
            {
                openDropdownMenu && <DropdownMenu />
            }
            {
                openDropdownMenuEmp && <DropdownMenuEmp />
            }


            {/* for mobile view display */}
            <div className="navbar-smallscreen">
                <GiHamburgerMenu color='var(--color-golden)' fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="navbar-smallscreen_overlay app__flex-center index__slide-bottom">
                        <MdOutlineClose fontSize={18} className="navbar-overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="navbar-smallscreen_links">
                            <li>
                                <a href="/" onClick={() => setToggleMenu(false)}>Home</a>
                            </li>

                            <li>
                                <a href="/categories" onClick={() => setToggleMenu(false)}>Shop</a>
                            </li>

                            <li>
                                <a href="/aboutus" onClick={() => setToggleMenu(false)}>About Us</a>
                            </li>

                            <li>
                                <a href="/login" onClick={() => setToggleMenu(false)}>Login</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;