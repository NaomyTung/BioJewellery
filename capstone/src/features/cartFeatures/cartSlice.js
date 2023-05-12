// Author: Sri
// Version 1.0
// Date: 15/03/2023
 
import {createSlice, createAsyncThunk, createSelector} from '@reduxjs/toolkit'
import cartService from './cartService'

const initialState = {
    cartProducts: [], 
    itemCount: 0,       
    isError: false,
    isSuccess: false,
    isLoading: false,
    subTotal: 0,
    message: ''
}
 
//Add item to cart
export const addItemToCart = createAsyncThunk('cart/create', async (item, thunkAPI) => {
    try {
    
        console.log(item);
        const token = thunkAPI.getState().auth.user.token
        return await item
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

export const calculateSubtotal = (products) => {
    let subtotal = 0;
    products.forEach((product) => {
      subtotal += (product.productPrice * product.quantity);
    });
    return subtotal;
  };

 const selectProducts = (state) => state.cart.cartProducts;

export const selectSubtotal = createSelector(
  [selectProducts],
  (products) => calculateSubtotal(products)
);
  
//Get cart items
export const getCartItems = createAsyncThunk('cart/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.getCartItems(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Increase and update item quantity by 1
export const increaseItemQuantity = createAsyncThunk('cart/increase', 
async (item, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
    
        return await cartService.increaseItemQuantity(item, token)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
        return thunkAPI.rejectWithValue(message) 
    }
})

//Decrease and update item quantity by 1
export const decreaseItemQuantity = createAsyncThunk('cart/decrease', 
async (item, thunkAPI) => {
    try {
        
        const token = thunkAPI.getState().auth.user.token
        return await cartService.decreaseItemQuantity(item, token)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
        return thunkAPI.rejectWithValue(message) 
    }
})

//Delete cart Item
export const deleteCartItem = createAsyncThunk('cart/delete', 
async (productName, thunkAPI) => {
    try {
        
        return productName
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
        return thunkAPI.rejectWithValue(message) 
    }
})

//Slice creation to manage cart state
    export const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            reset: (state) => initialState,
            updateProductQuantity: (state, action) => {
                const { product, quantity } = action.payload;
                const productIndex = state.cartProducts.findIndex(p => p.productName === product.productName);
                state.cartProducts[productIndex].quantity = quantity;
                state.subTotal = state.cartProducts.reduce((total, p) => total + (p.productPrice * p.quantity), 0).toFixed(2);
              },
            
        },
    
    extraReducers: (builder) => {
        builder
        .addCase(addItemToCart.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addItemToCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts.push(action.payload)
            state.itemCount = state.cartProducts.length
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.cartProducts = action.payload.cartItems
            state.subTotal = action.payload.subTotal
           
        })
        .addCase(getCartItems.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(increaseItemQuantity.pending, (state) => {
            state.isLoading = true
        })
        .addCase(increaseItemQuantity.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true
            for(let i = 0; i < state.cartProducts.length; i++){
                if(state.cartProducts[i].productName === action.payload.productName){
                    console.log(action.payload)
                    state.cartProducts[i].quantity = action.payload.newQuantity;
                }
            }
            
        })
        .addCase(increaseItemQuantity.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
            
        })
        .addCase(decreaseItemQuantity.pending, (state) => {
            state.isLoading = true
        })
        .addCase(decreaseItemQuantity.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true
            for(let i = 0; i < state.cartProducts.length; i++){
                if(state.cartProducts[i].productName === action.payload.productName){     
                    state.cartProducts[i].quantity = action.payload.newQuantity;
                }
            }
        })
        .addCase(decreaseItemQuantity.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(deleteCartItem.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteCartItem.fulfilled, (state, action, thunkAPI) => {
            state.isLoading = false
            state.isSuccess = true 
           
            for(let i = 0; i < state.cartProducts.length; i++){
                
                if(state.cartProducts[i].productName === action.payload){
                    
                    state.cartProducts.splice(i,1)
                    
                }
            }
            state.itemCount = state.cartProducts.length
        })
        .addCase(deleteCartItem.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
    }
})

export const {reset, updateProductQuantity} = cartSlice.actions
export default cartSlice.reducer