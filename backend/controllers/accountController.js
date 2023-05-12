/**
 * Account controller logic
 */
// Author: Naomy, Sri
// Version 1.0

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')
const Address = require('../models/addressModel')
const User = require('../models/userModel')
const sendMail = require('../helpers/sendEmail')

// @desc    Register new Account
// @route   POST /api/account
// @access  Public
const registerAccount = asyncHandler(async (req, res) => {
  const { name, email, password, street, city, province, country, postalCode } = req.body

  if (!name || !email || !password || !street || !city || !province || !country || !postalCode) {
    res.status(400)
    throw new Error('Please add all fields!')
  }

  const emailLowerCase = email.toLowerCase()

  // Check if account exists
  const accountExists = await Account.findOne({ 'email':emailLowerCase })

  if (accountExists) {
    res.status(400)
    throw new Error('Account already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create Shipping Address
  const shippingAddress = await Address.create({
    street,
    city,
    province,
    country,
    postalCode
  })

  //Create User 
  const user = await User.create({
    name: name,
    shippingAddress: shippingAddress._id
  })

 
  // Create account
  const account = await Account.create({
    email: emailLowerCase,
    password: hashedPassword,
    user: user._id,
  })

  if (account) {
    res.status(201).json({
      _id: account.id,
      email: account.email,
      token: generateToken(account._id),
      name: name,
      user: {
        _id: user._id,
        type:user.type,
        name: user.name
      },
      address: {
        street: shippingAddress.street,
        city: shippingAddress.street,
        province: shippingAddress.province,
        country: shippingAddress.country,
        postalCode: shippingAddress.postalCode
      }
    })
  }
  else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Forgot Password
// @route   POST /api/account/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {

  //get email
  const { email } = req.body;
  const emailLowerCase = email.toLowerCase()

  try {
    //check email 
    const oldaccount = await Account.findOne({ 'email': emailLowerCase })
    if (!oldaccount) {
      res.status(400)
      throw new Error('User does not exist!');
    }

    const user = await User.findById({ '_id': oldaccount.user })

    //create token
    const token = generateTokenAccess(oldaccount.email);

    //send email
    //http://localhost:8001/ --> when host the website we need to replace this part to the website server 
    const url = `https://biojewelry.onrender.com/reset-password/${token}`;
    // const url = `http://localhost:3000/reset-password/${token}`;
    const name = user.name;
    sendMail.sendEmailReset(email, url, "Reset your password", name)

    //success
    res.status(200).json({ msg: "Re-send the password, please check your email." })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

// @desc    Reset Password
// @route   POST /api/account/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  try {
    //get password 
    const { password } = req.body

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //update password 
    const email = req.email

    //const account = await Account.findOne({ 'email': email})
    await Account.findOneAndUpdate(
      { 'email': email },
      { 'password': hashedPassword }
    );

    //reset success
    res.status(200).json({ msg: "Password was updated successfully." })
  }
  catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

// @desc    Authenticate an Account
// @route   POST /api/account/login
// @access  Public
const loginAccount = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const emailLowerCase = email.toLowerCase()

  // Check for user email
  const account = await Account.findOne({ 'email': emailLowerCase })

  //user object
  const user = await User.findById(account.user)

  const address = await Address.findById(user.shippingAddress)


  if (account && (await bcrypt.compare(password, account.password))) {
    res.json({
      _id: account.id,
      email: account.email,
      token: generateToken(account._id),
      user: {
        _id: user._id,
        type: user.type,
        name: user.name
      },
      address: {
        street: address.street,
        city: address.street,
        province: address.province,
        country: address.country,
        postalCode: address.postalCode
      }
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

const suspendAccount = asyncHandler(async (req, res) => {
  res.status(200).json(req.account)
})

const appealAccount = asyncHandler(async (req, res) => {
  res.status(200).json(req.account)
})

// @desc    Get account by email
// @route   GET /api/accounts
// @access  Private
const getAccount = asyncHandler(async (req, res) => {
  const { email } = req.body

  const emailLowerCase = email.toLowerCase()
  l
  const account = await Account.findOne({ 'email': emailLowerCase })

  if (!account) {
    res.status(400)
    throw new Error('Accounts not found')
  }
  res.status(200).json(account)

}
)


// @desc    Update Account
// @route   POST /api/update
// @access  Public

const updateAccount = asyncHandler(async (req, res) => {

  const { name, street, city, province, country, postalCode, email } = req.body

  const account = await Account.findOne({ 'email': email });
  //Check for account
  if (!account) {
    res.status(400)
    throw new Error('Account not found')
  }
  
  const user = await User.findById(account.user)
  //Check for user
  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }

  const address = await Address.findById(user.shippingAddress)
  //Check for account
  if (!address) {
    res.status(400)
    throw new Error('Address not found')
  }


  //save name
  if (name) {

    user.name = req.body.name ?? account.user.name
  }


if(street){

  //save street
    address.street = street ?? account.user.address.street

}
  if(city){
    //save city
    address.city = city ?? account.user.address.city

  }
 if(province){
   //save province
   address.province = province ?? account.user.address.province

 }

 if(country){
  
  //save country
  address.country = country ?? account.user.address.country

 }

 if(postalCode){
   //save postalcode
   address.postalCode = postalCode ?? account.user.address.postalCode

 }
 user.shippingAddress = address ?? user.shippingAddress

  await address.save()
  await user.save()
  await account.save()
  res.json({
    _id: account.id,
    email: account.email,
    token: generateToken(account._id),
    user: {
      _id: user._id,
      type: user.type,
      name: user.name
    },
    address: {
      street: address.street,
      city: address.street,
      province: address.province,
      country: address.country,
      postalCode: address.postalCode
    }
  })

  

  res.status(200).json({ message: 'Account Updated' });

})




const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

// Generate JWT for acsess -- id is the payload
const generateTokenAccess = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
}

module.exports = {
  registerAccount,
  loginAccount,
  getAccount,
  updateAccount,
  suspendAccount,
  appealAccount,
  forgotPassword,
  resetPassword
}