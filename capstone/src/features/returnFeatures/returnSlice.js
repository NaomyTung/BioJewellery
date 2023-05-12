// Author: Naomy Tung

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import returnService from './returnService'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register account
export const returnRequest = createAsyncThunk(
  'return/returnRequest',
  async (user, thunkAPI) => {
    try {
      return await returnService.sendForm(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const returnSlice = createSlice({
  name: 'return',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(returnRequest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(returnRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.return = action.payload
      })
      .addCase(returnRequest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = returnSlice.actions
export default returnSlice.reducer