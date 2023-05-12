// Author: Sri Guru
// Version 1.0
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const Cart = require('../models/cartModel')

// @desc    Get all the products added in a cart
// @route   GET /api/cart
// @access  Private
const getCartItems = asyncHandler(async (req, res) => {
    try { 
                       
        //find the cart for the current user
        const cart = await Cart.find({client: req.user._id});

        if (!cart) {
            res.status(400)
        throw new Error('Cart not found for the user');
        }

        //fetching the items in cart
        //extracting productIds to find the product details
        const productIds = cart.products.map((product) => product.productId);

        //Using $in operator to match any of the values in productIds array
        const products = await Product.find({ _id: { $in: productIds } });

        //Combining the quantity and full product data into a single array of product objects
        //attaching product info so, in front end to display additional info like title, desc and images for the user to identify.
        const cartItems = cart.products.map((product) => 
        {   
            const productData = products.find((p) => p._id.equals(product.productId));
            return { product: productData, quantity: product.quantity };
        });

        const subTotal = cart.subTotal

        //returning cart items and subtotal
        res.status(200).json({cartItems, subTotal});
    } 
    catch (error) {
        res.status(400)
        throw new Error('Unable to get the cart items you are looking for');
    }
})

//Func to add quantity (+)
// @desc    update existing item quantity by adding 1 in cart
// @route   PATCH /api/cart/:productId
// @access  private
const increaseItemQuantity = asyncHandler(async (req, res) => {
        
    const { productName,quantity } = req.params;
    
    let newQuantity = quantity;
    //Check if the product exists
    const product = await Product.find({'name' : productName});

    if(!product || !quantity){
        res.status(400)
        throw new Error('Sorry, Product not found in database');
    }

    if (product.quantity > quantity){
        newQuantity = product.quantity
    }

    if (product.quantity <= 0 ){
        res.status(400).json({productName});
        throw new Error('Sorry, Product no longer available');
    }
    
    res.status(200).json({ productName,newQuantity });
})


//func to decrease quantity (-), when it is 0, remove from cartItems
// @desc    update existing item quantity by subtracting 1 in cart
// @route   PUT /api/cart/:productId
// @access  private
const decreaseItemQuantity = asyncHandler(async (req, res) => {
        
    const { productName,quantity } = req.params
    //Check if the product exists
    let newQuantity = quantity;
    //Check if the product exists
    const product = await Product.find({'name' : productName});

    if(!product || !quantity){
        res.status(400)
        throw new Error('Sorry, Product not found in database');
    }

    if (product.quantity > quantity){
        quantity = product.quantity
    }

    if (product.quantity <= 0 ){
        returres.status(400).json({productName});
        throw new Error('Sorry, Product no longer available');
    }


    res.status(200).json({productName,newQuantity});

})


// @desc    delete an item in cart
// @route   DELETE /api/cart/:cartId/products/:productId
// @access  private
const deleteCartItem = asyncHandler(async (req, res) => {

   //reading the cartId and productId from request
   const { cartId, productId } = req.params
   
   //Finding the cart, which has the item to be removed
   const cart = await Cart.findById(cartId)

   //finding the product position in the cart.products array that needs to be deleted
   const deletingProductIndexVal = cart.products.findIndex(
    (product) => product.productId.toString() === productId )

    //if the product doesn't exist in cart
    if(deletingProductIndexVal === -1){
        res.status(400)
        throw new Error('The product does not exist in cart')
    }
    
    //Else delete the product from array
    cart.products.splice(deletingProductIndexVal,1);

    //saving the updated cart document in Database
    await cart.save()

    //if the cart has no items left
    if (cart.products.length === 0) {
        res.status(200).json({message: 'Your cart is empty'});
    }
    
    //if the cart has the item removed and has other products in it
    //fetching the items in cart
    //extracting productIds to find the product details
    const productIds = cart.products.map((product) => product.productId);

    //Using $in operator to match any of the values in productIds array
    //if match, returning the product object of that id
    const products = await Product.find({ _id: { $in: productIds } });

    //Combining the quantity and full product data into a single array of product objects
    //attaching product info so, in front end to display additional info like title, desc and images for the user to identify.
    const cartItems = cart.products.map((product) => 
    {   
        const productData = products.find((p) => p._id.equals(product.productId));
        return { product: productData, quantity: product.quantity };
    });

    res.status(200).json({cartItems});
        
})

module.exports = {
    increaseItemQuantity,
    decreaseItemQuantity,
    deleteCartItem,
    getCartItems
}