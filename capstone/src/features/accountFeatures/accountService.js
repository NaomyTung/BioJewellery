// Author: Naomy Tung
// Version 0.1

import axios from 'axios'
const API_URL = '/api/account/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

//Help
const forgetPassword = async (userData) => {
  const response = await axios.post(API_URL + 'forgot-password', userData)

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

// Get user accounts
const getAccounts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

//Update User
const updateAccount = async (formData) => {
  const response = await axios.put(API_URL + 'update', formData)

  if (response.data) {
    //localStorage.removeItem('user')
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  register,
  logout,
  login,
  getAccounts,
  updateAccount,
  forgetPassword
}

export default authService
