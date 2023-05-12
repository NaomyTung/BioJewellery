// Author: Matthew, Sri, Naomy, Buola, Nicholas
// Version: 1.0
// Date: 19/03/2023

// Description: This component is for "proceed to checkout" button

import React from 'react';
import './PayButton.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const PayButton = () => {

  return (
    
    <div className="cartbar__button" >
      <Link to="/shipping">
        <button>
          <FaShoppingCart className='cartbar__icon'/>
            Proceed to Checkout
        </button>
      </Link>      
    </div>
  )

}

export default PayButton;
