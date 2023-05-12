import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ReviewService from "./reviewServices";

const initialState = {
    reviews: [],
    loading: false, 
    error: null
}
// Get all reviews
export const getAllReviews = createAsyncThunk("reviews/getAllReviews",async (productName, thunkAPI) => {
    try{
    const response = await ReviewService.getAllReviews(productName)
   
    return response;
  } catch (error) {
      const message = (
          error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();
      return thunkAPI.rejectWithValue(message)

  }
});

// Create a review
export const createReview = createAsyncThunk(
  "reviews/createReview",
  async (review, thunkAPI) => {
    
    const token = thunkAPI.getState().auth.user.token
    const response = await ReviewService.createReview(review, token);
    return response.data;
  }
);

// Reply a review
export const replyReview = createAsyncThunk(
  "reviews/replyReview",
  async (replyParams, thunkAPI) => {
   
    const token = thunkAPI.getState().auth.user.token
    const userId = thunkAPI.getState().auth.user.user._id
    const replyData = {"reply":replyParams.reply, "userId":userId}
    console.log(replyData)
    const response = await ReviewService.replyReview(replyParams.reviewId, replyData, token);
    return response.data;
  }
);

// Create a review
export const removeReview = createAsyncThunk(
  "reviews/removeReview",
  async (reviewId, thunkAPI) => {
   
    const token = thunkAPI.getState().auth.user.token
    const userId = thunkAPI.getState().auth.user.user._id
    const replyData = {"userId":userId}
  
    const response = await ReviewService.removeReview(reviewId, replyData, token);
    return response.data;
  }
);

export const selectReviews = state => state.review.reviews;

export const canUserReviewProduct = state => {
  const user_id = state.auth.user.user._id;
  const reviews = selectReviews(state);
  return reviews.some(item => item.client === user_id);
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews = action.payload;
      

      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews.push(action.payload);
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(replyReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(replyReview.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(replyReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeReview.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(removeReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = reviewSlice.actions

export default reviewSlice.reducer;
