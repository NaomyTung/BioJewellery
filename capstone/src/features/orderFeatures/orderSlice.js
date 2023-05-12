import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import orderService from './orderService'

const initialState = {
    order: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create and save an order
export const createOrder = createAsyncThunk('order/create', async (orderData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await orderService.createOrder(orderData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//Get user order
export const getOrder = createAsyncThunk('addresses/get', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await orderService.getOrder(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//cancel an order
export const deleteOrder = createAsyncThunk('order/delete', 
async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await orderService.deleteOrder(id, token)
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) 
            || error.message || error.toString()
            
        return thunkAPI.rejectWithValue(message) 
    }
})


export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        reset: (state) => initialState            
    },
    extraReducers: (builder) => {
        builder
        .addCase(createOrder.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.order.push(action.payload) 
        })
        .addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(getOrder.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.goals = action.payload 
        })
        .addCase(getOrder.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
        .addCase(deleteOrder.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true //when we make a delete request, response returns the deleted address ID
            state.order = state.order.filter((order) => order._id !== action.payload.id)
        })
        .addCase(deleteOrder.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
    }

})

export const {reset} = orderSlice.actions
export default orderSlice.reducer