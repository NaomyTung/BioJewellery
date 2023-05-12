import React from 'react';

import './EmployeeProduct.css';

const EmployeeProduct = () => {
    return (
        <div className="app__center-employee-product">

            <div className="employee__product-container">

                <div className="employee__image">
                  
                </div>

                <div className="employeee__product-title">
                    <h1 className="employee__product-name">Product Name: xxxx</h1>
                    <h1 className="employee__product-price">Price: 100.00</h1>
                    <h1 className="employee__product-price">Price:100.00</h1>
                </div>

                <ul className="employee__product-details">
                    <li className="employee__product-desc">Description</li>
                    <li className="employee__product-stock">Stock:xx</li>
                </ul>

                <div className="employee__product-icon-container">
                    <button className="employee__product-button" >Save</button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeProduct;