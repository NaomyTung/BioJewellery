// Author: Ling Shan Matthew Ng, Naomy Tung
// Version 0.2
// Date: 18/1/2023

import React from 'react'
import { Outlet } from "react-router-dom";
import { Footer } from '../../containers';
import { Navbar } from '../../components';

const UserNavigation = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default UserNavigation
