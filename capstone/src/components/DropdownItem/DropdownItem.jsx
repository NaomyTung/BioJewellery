// Author: Naomy
// Version 1.0
// Date: 21/03/2023

import './DropdownItem.css';

const DropdownItem = (props) => {
    return (
        <div className='dropdownItem'>
            <li>
                <a href={props.link}> {props.text} </a>
            </li>
        </div>

    )
}

export default DropdownItem;

