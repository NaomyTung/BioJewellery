import React from 'react';
import { EmployeeMenu } from '../../components';
import { ReturnBlock }  from '../../components';
import { MdKeyboardArrowDown } from "react-icons/md";
import './EmployeeReturn.css';

const EmployeeReturn = () => {
    return (
        <div className="app__center">
            <EmployeeMenu />

            <div className="employee__return-header">
                <h1 className="employee__header">Open Return Requests</h1>
                    
                <div className="employee_return-icon">  
                    <MdKeyboardArrowDown size={30}/>
                </div>

                <div className="employee__return-block">
                    <ReturnBlock />
                </div>  

                <div className="employee__date">

                </div>    
            </div>


            <ul className="employee__button-block">
                <li className="employee__open-button">
                    <h2>Open</h2>
                </li>

                <li className="employee__pending-button">
                    <h2>Pending</h2>
                </li>

                <li className="employee__completed-button">
                    <h2>Completed</h2>
                </li>

                <li className="employee__all-button">
                    <h2>All</h2>
                </li>
            </ul>

        </div>
    )
}

export default EmployeeReturn;