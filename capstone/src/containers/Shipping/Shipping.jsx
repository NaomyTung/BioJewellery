/**
* Author: Buola Achor, Ling Shan Matthew Ng, Nicholas Proc, Naomy Tung, Srineethi Gurumurthi Girahhalakshmi 
* Version 1.0
* Date: 19/1/2023
*
* Description: Order preview page displaying shipping address and total with tax. 
* Precondition: User added item in cart
* Postcondition: Redirects to Stripe payment
*
*/
import './Shipping.css';
import React from 'react';
import { SubHeading } from '../../components';
import  Address from '../../components/Address/Address'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'

const Shipping = () => {

    return (
        <div className='order app__section-padding'>
            <SubHeading title={'Shipping Details'} />

            <div className='order__pt1'>
                <Address />
            </div>

            <CheckoutSummary />
            
        </div>
    );
};

export default Shipping
