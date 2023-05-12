import React, { Component } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { EmployeeMenu } from '../../components';
import './EmployeeSettings.css';

const EmployeeSettings = () => {
    return (
        <div className="flex__center">

        <EmployeeMenu />

        <div className="employee__center">
            <form>
            <h1 className="employee__header">Settings</h1>
            
            <h2 className="employee__secondary-header">Personal Information</h2>

                <div className="employee__profile-photo">
                    <BsFillPersonFill color='#818181' size={120} />
                </div>

                <h2 className="employee__account-header">Account Information</h2>

                <div className="employee__account-information">

                    Current Password<br/>
                    <label className="employee__current-pass">
                        <input name="cpass" type="text" placeholder="Enter Password"/><br/>
                    </label>

                    New Password<br/>
                    <label className="employee__new-pass">
                        <input name="npass" type="text" placeholder="Enter Password"/><br/>
                    </label>

                    Confirm Password<br/>
                    <label className="employee__confirm-pass">
                        <input name="conpass" type="text" placeholder="Enter Password"/><br/>
                    </label>
                </div>

                <div className="employee__personal-information">
                    <label className="employee__first-name">
                        <input name="fname" type="text" placeholder="Hailey"/><br/>
                    </label>
                    
                    <label className="employee__last-name">
                        <input name="lname" type="text" placeholder="Johnson"/><br/>
                    </label>
                    
                    Phone Number <br/>
                    <label className="employee__phone-number">
                        <input name="phone" type="text" placeholder="000-000-0000"/><br/>
                    </label>

                    Address<br/>
                    <label className="employee__address">
                        <input name="address" type="text" placeholder="32 My Address"/><br/>
                    </label>

                    <div className="employee__info-one">

                        <label >
                            <input name="city" type="text" placeholder="Calgary"/><br/>
                        </label>

                        <label>
                            <input name="province" type="text" placeholder="AB"/><br/>
                        </label>
                    </div>    
                        
                    <div className="employee__info-two">   
                        <label>
                            <input name="postal" type="text" placeholder="Y7R 717"/><br/>
                        </label>

                        <label>
                            <input name="country" type="text" placeholder="Canada"/><br/>
                        </label>
                    </div>     
                </div>

                <div className="employee__priveleges">
        
                </div>

                <div className="employee__settings-button">
                    <button className="settings__button-save" >Save</button>
                    <button className="settings__button-cancel" >cancel</button>
                </div>
                              
            </form>
        </div>     
        </div>
    );
}

export default EmployeeSettings;