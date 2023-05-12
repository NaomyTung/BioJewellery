// Author: Naomy, Sri
// Date: 14/03/2023

const asyncHandler = require('express-async-handler');
const productModel = require('../models/productModel');
const cloudinary = require('../config/cloudinary');

string = "test"

const getAllByAvailableProducts = asyncHandler(async (req, res) => {
    try {
        const products = await productModel.find({"isAvailable": true});
        res.status(200).json(products);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }
})

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }
})


const getProduct = asyncHandler(async (req, res) => {

    try {
       
        if (req.params.name === null || req.params.name === '' || req.params.name === undefined) {
            res.status(400)
            throw new Error('No way to determine product being searched for');
        }
        //finiding product object
        const productObj = await productModel.findOne({'name': req.params.name});
       
        res.status(200).json({ productObj });
    } 
    catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }

})


const setProduct = asyncHandler(async (req, res, next) => {
    try {   
    
    const result = await cloudinary.uploader.upload(req.file.path);
    

    if (!result) {
        res.status(400)
        throw new Error('error in image file upload')
    }

    if (!req.body.name || !req.body.description || !req.body.price || !req.body.quantity) {
        res.status(400)
        throw new Error('Please provide all fields!')
    }   

    const product = await productModel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        stripeProductId: req.stripeProductId,
        priceApiId: req.priceApiId,
        cloudinaryId: result.public_id,
        imageUrl: result.secure_url
    })

    if (!product) {
        res.status(400)
        throw new Error('error in product creation!')
    }
    
    // res.json({ product });
    res.json({ 'message': `Product ${product.name} added! You can start adding another one`});

    } catch(error){
        throw new Error(error);
    }
})


const updateProduct = asyncHandler(async (req, res) => {
    try 
    {
    
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.quantity || !req.body.id) {
        res.status(400)
        throw new Error('Please provide all fields!')
    }

    //receiving product fields 
    const {name, description, price, quantity, image} = req.body

    //finiding product object
    const productObj = await productModel.findOne({'_id': req.body.id});

    // Upload new image to cloudinary
    let result = null;
    if (image !== 'undefined' && image !== null) {
        if (req.file){
            result = await cloudinary.uploader.upload(req.file.path);
        }
    }

    //if new image is uploaded successfully to cloudinary, delete the old one
    if(result !== null){
    // Delete old image from cloudinary
    await cloudinary.uploader.destroy(productObj.cloudinaryId);
    productObj.cloudinaryId = result.public_id ?? productObj.cloudinaryId
    productObj.imageUrl = result.secure_url ?? productObj.imageUrl
    }

    //set the product fields to the new values or by default the existing value
    if (name !== 'undefined' && name !== null){
        productObj.name = name ?? productObj.name
    }
    if (description !== 'undefined' && description !== null){
        productObj.description = description ?? productObj.description
     

    }
    if(price !== 'undefined' && price !== null){
        productObj.price = price ?? productObj.price
    }
    if(quantity){
        productObj.quantity = quantity ?? productObj.quantity
       
    }
    
    productObj.priceApiId = req.priceApiId ?? productObj.priceApiId

    //save updated product to database
    await productObj.save()
  
    res.status(200).json({'product': productObj, 'message': `Product ${productObj.name} updated! You can start updating another one`});

    }//end of try block    
    catch (error) {
        throw new Error(error);
    }    
})

const sortProducts = asyncHandler(async (req, res) => {
    let products;
    const sortChoice = req.params.sortType

    if (req.params.sortType === ' ') {
        throw new Error('Cant sort products by ' + sortChoice)
    }
    switch (sortChoice) {
        case 'Ascd':
            products = await productModel.find();
            products = sortByAsc(products);

            break;
        case 'Dscd':
            products = await productModel.find();
            products = sortByDscd(products);
            break;
        case 'On Sale':
            products = await productModel.find({ onSale: true, "isAvailable": true });
            
            break;
        case 'Trending':
            products = await productModel.find({ Trending: true, "isAvailable": true });
            
            break;
        case 'Popular':
            products = await productModel.find({ isPopular: true, "isAvailable": true });
            break;
        default:
            throw new Error('Cant sort products by ' + sortChoice)
    }

    res.status(200).json(products);

})


function sortByAsc(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeAsc(sortByAsc(left), sortByAsc(right));

    function mergeAsc(left, right) {
        const result = [];

        while (left.length && right.length) {
            if (left[0].price <= right[0].price) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return result.concat(left, right);
    }
}


function sortByDscd(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeDsc(sortByDscd(left), sortByDscd(right));
}

function mergeDsc(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0].price >= right[0].price) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
}


module.exports = {
    sortProducts,
    setProduct,
    updateProduct,
    getProduct,
    getAllProducts,
    getAllByAvailableProducts
}