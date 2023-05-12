import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../../features/productFeatures/productSlice';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { Navbar } from '../../components';
import { Box, Stack } from "@mui/material";
import './EmpAdd.css';
import EmpSidebar from "./EmpSidebar";

const EmpAdd = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });
    const [fileName, setFileName] = useState("No Selected file")
    const [imageLink, setImageLink] = useState('')
    const { message, isLoading, isSuccess } = useSelector((state) => state.products)

    useEffect(() => {

        if (isSuccess) {
            setNewProduct({
                name: '',
                description: '',
                price: '',
                quantity: ''
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

        setNewProduct({ ...newProduct, [name]: value });

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
            console.log("Name" + formData.name)
            dispatch(setProduct(formData));

        }
        catch (error) {
            console.log(error);
        }
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
                                        Add Products
                                    </h1>

                                    <h1 className='emp-account__header'>
                                        Product Information
                                    </h1>

                                    <h3>Product Name</h3>
                                    <br />
                                    <div className='emp-account__input-long'>
                                        <input
                                            className='emp-account__input'
                                            type="text"
                                            id="productname"
                                            placeholder="Product Name"
                                            required
                                            value={newProduct.name}
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
                                            placeholder="Product Description"
                                            required
                                            value={newProduct.description}
                                            onChange={changeHandler('description')}
                                        />
                                    </div>

                                    <div className="emp-account__small-table">
                                        <div className="emp-account__table-column2">
                                            <h3>Price in CA$</h3>
                                            <br />
                                            <div className='emp-account__input-short'>
                                                <input
                                                    className='emp-account__input'
                                                    type="text"
                                                    id="productprice"
                                                    placeholder="Enter Price"
                                                    required
                                                    value={newProduct.price}
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
                                                    id="productstock"
                                                    placeholder="Enter Stock Number"
                                                    required
                                                    value={newProduct.quantity}
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
                                            required
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

                                <button>
                                    Cancel
                                </button>
                            </div>

                            <div className="message">
                                <div className="content">{message}</div>
                            </div>

                        </div>
                    </form>
                </Box>
            </Stack>
        </div >
    )
}
export default EmpAdd;