import axios from 'axios'
const API_URL = '/api/cart/'

//Get user cart items
const getCartItems = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

//Increase and update item quantity by 1 
const increaseItemQuantity = async (item, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const productName = item.productName
    const quantity = 1 + parseInt(item.quantity);
   
    const response = await axios.get(API_URL + productName + "/quantity/" + quantity, config)
    return response.data
}

//Decrease and update item quantity by 1 
const decreaseItemQuantity = async (item, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const productName = item.productName
    const quantity = parseInt(item.quantity) - 1;
    if (quantity <= 0){
        return new Error('Cannot make a negative quantity');
    }
    
    const response = await axios.get(API_URL + quantity + "/name/" + productName, config)
    return response.data
}

const cartService = {
    getCartItems,
    increaseItemQuantity,
    decreaseItemQuantity    
}

export default cartService