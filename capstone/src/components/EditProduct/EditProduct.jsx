// Author: Buola Achor
// Version 0.1
// Date: 18/1/2023

// Description: This is the add product employee page. 
// Precondition: Must be connected and be able to access products in the database also have the uploader component
// Postcondition: nothing

// Input: User Product Specifications 
// Output: Page

import React, { useState, useEffect } from 'react'
import EmployeeMenu from '../EmployeeMenu/EmployeeMenu';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import './EditProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByName, updateProduct } from '../../features/productFeatures/productSlice';


const EditProduct = () => {

    const productName  = 'Cerrado Leaf Bracelet';
    console.log(productName);

    const dispatch = useDispatch();
    const { selectedProduct, message, isLoading, isSuccess} = useSelector((state) => state.products)
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No Selected file")
    const [imageLink, setImageLink] = useState('')
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        
        dispatch(getProductByName(productName));

        console.log(selectedProduct)
        setImageLink(selectedProduct.imageUrl)
        setFileName(selectedProduct.name)

    }, [dispatch]);

    const uploadImage = (e) => {
        setImage(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setImageLink(URL.createObjectURL(e.target.files[0]));
    }

    const changeHandler = (name) => (e) => {

        let value       
        value = e.target.value;

        setNewData({ ...newData, [name]: value});
        
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let formData = new FormData();
            formData.append('image', image);
            formData.append('name', newData.name);
            formData.append('description', newData.description);
            formData.append('price', newData.price);
            formData.append('quantity', newData.quantity);
            formData.append('id', selectedProduct._id);
            
            dispatch(updateProduct(formData));

        } 
        catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="flex__center">

            <form onSubmit={handleSubmit} encType="multipart/form-data">

                <div className="edit_employee-menu">
                    <EmployeeMenu />
                </div>

                <div className="edit__name">    
                    <h1 className="edit_title">Edit Product</h1>

                    <div className="edit__product-info">    
                        <p>Product Information</p>
                    </div>
                </div>

                <div className="edit__product-uploader">
                    <div className="upload" onClick={() => document.querySelector(".upload__input").click()}>
                        
                        <input 
                            name="image" 
                            type="file" 
                            accept='image/*'
                            className="upload__input" 
                            hidden
                            required
                            onChange={ uploadImage }

                        />
                        {imageLink ?
                            <img src={imageLink} alt={fileName} />
                            :
                            <>
                                <div className='upload__icons-upload'>
                                    <AiOutlineCloudUpload color='#1475cf' size={60} />
                                </div>

                                <p>Browse Files to Upload</p>
                            </>
                        }
                        <div>
                            <h1>{fileName}</h1>
                        </div>
                    </div> 
                </div>

                <div className="edit__product-name">
                    <label>
                        Product Name<br/>
                        <input 
                            name="name" 
                            type="text" 
                            className="edit__input-name" 
                            value={selectedProduct.name}
                            onChange={changeHandler('name')}
                        /><br/>
                    </label>
                </div>    

                <div className="edit__product-desc"> 
                    <label>
                        Product Description<br/> 
                        <input 
                            name="description" 
                            type="text" 
                            className="edit__input-desc" 
                            value={selectedProduct.description}
                            onChange={changeHandler('description')}
                        /><br/>
                    </label>
                </div>

                <ul className="edit__price-prod">
                    <li className="edit__product-price">
                        <label>
                            <h3 className="input__name">Price </h3>
                            <input 
                                name="price" 
                                type="number" 
                                className="edit__input-price" 
                                value={selectedProduct.price}
                                onChange={changeHandler('price')}
                            /><br/>
                        </label>
                    </li>

                    <li className="edit__product-stock">
                        <label>
                            <h3 className="input__name">In-Stock</h3>
                                <input 
                                    name="quantity" 
                                    type="number" 
                                    className="edit__input-stock" 
                                    value={selectedProduct.quantity}
                                    onChange={changeHandler('quantity')}
                                /><br/>
                        </label>
                    </li>
                </ul> 
                
                <div className="edit__buttons">
                    <button className="edit__button-save" type='submit'>Update Product</button>
                    <button className="edit__button-cancel">Cancel</button>  
                </div>
                <div className="message">
                    <div className="content">{message}</div>
                </div>           
            </form>     

        </div>
    );
}

export default EditProduct;