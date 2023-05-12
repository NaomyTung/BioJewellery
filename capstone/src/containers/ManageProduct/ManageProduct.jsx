import React from 'react';
import { EmpProductItem } from '../../components';
import AddIcon from '@mui/icons-material/Add';
import { FaSearch } from 'react-icons/fa';
import './ManageProduct.css';
import { Link } from 'react-router-dom';

const ManageProduct = ({ value, onChange }) => {

    const placeholder = <FaSearch />;
    
    return (
        
        <div>
            <h1>
                Manage Product
            </h1>

            <div>
                <Link to="/addproduct">
                    <AddIcon />
                </Link>
            </div>

            <div>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Search Product"
                />
            </div>
           
            <EmpProductItem />
            
        </div>
    )
}

export default ManageProduct;