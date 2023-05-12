/**
* Author: Buola Achor, Ling Shan Matthew Ng, Nicholas Proc, Naomy Tung, Srineethi Gurumurthi Girahhalskhmi 
* Version 0.1
* Date: 19/1/2023
*
* Description: Thank you for purchase page. 
* Precondition: User purchased a product and payment is successfull
* Postcondition: Thank you page is displayed with correct information about product and user
*
 */

import React from 'react'
import { SubHeading } from '../../components';
import './OrderConfirmation.css';


const OrderConfirmation = () => {
  
  return (
    <div className='order app__section-padding'>
      <SubHeading title={'We appreciate your order! We have sent you an email with your receipt.'} />
      </div>
  )
};

export default OrderConfirmation
