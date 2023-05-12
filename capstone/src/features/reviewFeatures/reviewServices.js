import axios from 'axios';
const API_URL = '/api/reviews/';

const getAllReviews = async (productName) => {

  const response = await axios.get(API_URL + productName);

  return response.data;

};

const createReview = async (reviewData, token) => {
  try {
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.post(API_URL, reviewData, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error creating review.');
  }
};



const replyReview = async (reviewId, replyData, token) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.put(API_URL + reviewId, replyData, config);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error replying review.');
  }
};


const removeReview = async (reviewId,replyData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.put(API_URL+ 'delete/' + reviewId, replyData, config);
    console.log(response)
    return response;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error replying review.');
  }
};

const reviewServices = {
  getAllReviews,
  createReview,
  replyReview,
  removeReview
}

export default reviewServices