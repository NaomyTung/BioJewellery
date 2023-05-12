import React from "react";
import { empAccountCategory } from '../../constants';
import './EmpSidebar.css'
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { logout, reset } from '../../features/accountFeatures/accountSlice'
import { MdAccountCircle } from 'react-icons/md';

const EmpSidebarAccount = (selectedCategory, setSelectedCategory ) => {
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
        <div className="empaccount__sidebar">
            <div class="grid-container">
                <div
                    // direction="row"
                    // sx={{
                    //     // overflowY: "none",
                    //     flexDirection: { md: "column" },
                    //     alignItems: 'right',
                    // }}
                >

                    <div className="empaccount__sidebar-img">
                        {/* <img src={images.avatar} alt="G_overlay" /> */}
                        <MdAccountCircle className="sidebar-icons" />
                        <h1>
                            {user.user.name}
                        </h1>
                    </div>
                    
                    
                    {empAccountCategory.map((category) => (
                        <Link to={category.route}>
                            <button
                                className="category-btn empaccount__grid-item"
                                onClick={() => {
                                    if(category.name === 'Logout') {
                                        logoutClick();
                                    }
                                    setSelectedCategory(category.name); 
                                    }}
                                style={{
                                    background: category.name === selectedCategory && "#bcf6b1",
                                    color: "#000000",
                                }}
                                key={category.name}
                            >
                                <span style={{ color: category.name === selectedCategory ? "black" : "#072d2e" }} className='empaccount__grid-item'>
                                    {category.icon}
                                </span>
                                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }} className='empaccount__grid-item empsidebar__content'>
                                    {category.name}
                                </span>
                            </button>
                        </Link>
                    ))}
                    
                </div>
            </div>
        </div>
    )
};

export default EmpSidebarAccount;