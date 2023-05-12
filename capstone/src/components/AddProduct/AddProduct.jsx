// Author: Buola Achor, Sri
// Version 2.1
// Date: 13/4/2023

// Description: This is the add product employee page. 
// Precondition: Must be connected and be able to add to the database also have the uploader component


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmployeeMenu from '../EmployeeMenu/EmployeeMenu';
import './AddProduct.css';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function AddProduct() {
    
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name:'',
        description:'',
        price:'',
        quantity:''
    });
    const [fileName, setFileName] = useState("No Selected file")
    const [imageLink, setImageLink] = useState('')
    const {message, isLoading, isSuccess} = useSelector((state) => state.products)
    
    useEffect(() => {

            if(isSuccess){
                setNewProduct({
                    name:'',
                    description:'',
                    price:'',
                    quantity:''
                })
                setImage(null);
                setFileName("No Selected file");
                setImageLink('');
            }

    }, [message, isLoading, isSuccess, dispatch]);

    const uploadImage = (e) => {
        setImage(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setImageLink(URL.createObjectURL(e.target.files[0]));
    }
    const changeHandler = (name) => (e) => {

        let value       
        value = e.target.value;

        setNewProduct({ ...newProduct, [name]: value});
        
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let formData = new FormData();
            formData.append('image', image);
            formData.append('name', newProduct.name);
            formData.append('description', newProduct.description);
            formData.append('price', newProduct.price);
            formData.append('quantity', newProduct.quantity);
            console.log(formData)
            //dispatch(setProduct(formData));

        } 
        catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className="flex__center">

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="add__employee-menu">
                    <EmployeeMenu />
                </div>

                <div className="add__name">
                    <h1 className="add__title">Add Product</h1>

                    <div className="add__product-info">
                        <p>Product Information</p>
                    </div>
                </div>


                <div className="add__product-uploader">
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

                <div className="add__product-name">
                    <label>
                        <h3 className="input__name">Product Name</h3>
                            <input 
                                name="name" 
                                type="text" 
                                className="add_input-name" 
                                placeholder="Product Name"
                                required
                                value={newProduct.name}
                                onChange={changeHandler('name')}
                            />
                    </label>
                </div>

                <div className="add__product-description">    
                    <label>
                        <h3 className="input__name">Product Description</h3>
                            <input 
                                name="description" 
                                type="text" 
                                className="add_input-desc" 
                                placeholder="Description"
                                required
                                value={newProduct.description}
                                onChange={changeHandler('description')}
                            /><br/>
                    </label>
                </div>

                <ul className="add__price-prod">
                    <li className="add__product-price">
                        <label>
                            <h3 className="input__name">Price In CAD</h3>
                                <input 
                                    name="price" 
                                    type="number" 
                                    className="add_input-price" 
                                    placeholder="Price per unit"
                                    required
                                    value={newProduct.price}
                                    onChange={changeHandler('price')}
                                /><br/>
                        </label>
                    </li>

                    <li className="add__product-stock">
                        <label>
                            <h3 className="input__name">In-Stock</h3>
                                <input 
                                    name="quantity" 
                                    type="number" 
                                    className="add_input-stock" 
                                    placeholder="Number of Products in Stock"
                                    required
                                    value={newProduct.quantity}
                                    onChange={changeHandler('quantity')}
                                /><br/>
                        </label>
                    </li>
                </ul>        

                <div className="add__buttons">
                    <button className="button-save" type='submit' >Save</button>
                    <button className="button-cancel">Cancel</button>  
                </div>  
                <div className="message">
                    <div className="content">{message}</div>
                </div>
            </form>
        </div>
    );
    
}

export default AddProduct;