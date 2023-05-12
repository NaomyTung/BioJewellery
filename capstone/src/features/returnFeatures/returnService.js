// Author: Naomy Tung

import axios from 'axios'
const API_URL = '/api/returnrequest/'

// Register Request
const sendForm = async (formData) => {
    const response = await axios.post(API_URL, formData)

    return response.data
}

const returnService = {
    sendForm
  }
  
  export default returnService
  