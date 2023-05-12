import React from 'react';
import { useEffect, useState } from "react";
import { Navbar } from '../../components';
import { useParams } from 'react-router-dom';
import { Box, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import './EmpEdit.css';
import EmpSidebar from "./EmpSidebar";
import { getProductByName, updateProduct, reset } from '../../features/productFeatures/productSlice';
import { Link } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const EmpEdit = (props) => {
    let { name } = useParams();
    const [selectedCategory, setSelectedCategory] = useState("Products");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No Selected file")
    const [imageLink, setImageLink] = useState('')
    const [newData, setNewData] = useState(null);
    const { selectedProduct, isError, message } = useSelector((state) => state.products);

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        dispatch(getProductByName(name))

        setImageLink(selectedProduct.imageUrl)
        setFileName(selectedProduct.name)
        return () => {
            dispatch(reset())
        }
    }, [name, isError, message, dispatch])

    const uploadImage = (e) => {
        setImage(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setImageLink(URL.createObjectURL(e.target.files[0]));
    }
   
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(imageLink)
            let formData = new FormData();
            formData.append('image', image);
            formData.append('name', newData.name === undefined ? selectedProduct.name : newData.name);
            formData.append('description', newData.description === undefined ? selectedProduct.description : newData.description);
            formData.append('price', newData.price === undefined ? selectedProduct.price : newData.price);
            formData.append('quantity', newData.quantity === undefined ? selectedProduct.quantity : newData.quantity);
            formData.append('id', selectedProduct._id);
            
            dispatch(updateProduct(formData));
            navigate('/manageproduct')
        } 
        catch (error) {
            console.log(error);
        }
    }

    const changeHandler = (name) => (e) => {

        let value       
        value = e.target.value;

        setNewData({ ...newData, [name]: value});
        
    }

    return (
        <div>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
                    <EmpSidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        <div className="emp-account">
                            <div className="emp-account__table">
                                <div className="emp-account__table-column1">
                                    <h1 className='emp-account__header'>
                                        Edit {selectedProduct.name}
                                    </h1>

                                    <h3>Product Name</h3>
                                    <br />
                                    <div className='emp-account__input-long'>
                                        <input
                                            className='emp-account__input'
                                            type="text"
                                            name="name"
                                            id="productname"
                                            placeholder="Product Name"
                                            value={newData === null ? selectedProduct.name : newData.name}
                                            onChange={changeHandler('name')}
                                        />
                                    </div>

                                    <h3>Product Description</h3>
                                    <br />
                                    <div className='emp-account__input-long'>
                                        <input
                                            className='emp-account__input'
                                            type="text"
                                            id="productdescription"
                                            name="description" 
                                            placeholder="Product Description"

                                            value={newData === null ? selectedProduct.description : newData.description}
                                            onChange={changeHandler('description')}
                                        />
                                    </div>

                                    <div className="emp-account__small-table">
                                        <div className="emp-account__table-column2">
                                            <h3>Price</h3>
                                            <br />
                                            <div className='emp-account__input-short'>
                                                <input
                                                    className='emp-account__input'
                                                    type="text"
                                                    name="price" 
                                                    id="productprice"
                                                    placeholder="Enter Price"
                                                    value={newData === null ? selectedProduct.price : newData.price}
                                                    onChange={changeHandler('price')}
                                                />
                                            </div>
                                        </div>

                                        <div className="emp-account__table-column2">
                                            <h3>In-Stock</h3>
                                            <br />
                                            <div className='emp-account__input-short'>
                                                <input
                                                    className='emp-account__input'
                                                    type="number"
                                                    name="quantity" 
                                                    id="productstock"
                                                    placeholder="Enter Stock Number"
                                                    value={newData === null ? selectedProduct.quantity : newData.quantity}
                                                    onChange={changeHandler('quantity')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="emp-account__table-column3">
                                    <div className="upload" onClick={() => document.querySelector(".upload__input").click()}>

                                        <input
                                            name="image"
                                            type="file"
                                            accept='image/*'
                                            className="upload__input"
                                            hidden
                                            onChange={uploadImage}

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
                            </div>


                            <div className="emp-account__action">
                                <button type='submit'>
                                    Save
                                </button>
                                <Link to={"/manageproduct"}>
                                    <button>
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </Box>
            </Stack>

        </div>
    )
}
export default EmpEdit;