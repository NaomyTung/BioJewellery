/**
 * 
 */
// Author: Naomy, Sri
// Version 1.0

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')
const User = require('../models/userModel')
const sendMail = require('../helpers/sendEmail')


// @desc    Forgot Password
// @route   POST /api/returnrequest
// @access  Public
const returnRequest = asyncHandler(async (req, res) => {

  //get email
  const { email } = req.body;
  const emailLowerCase = email.toLowerCase()
  const { content } = req.body;
  const { invoice } = req.body;

  try {
    //check email 
    const oldaccount = await Account.findOne({ 'email': emailLowerCase })
    if (!oldaccount) {
      res.status(400)
      throw new Error('User does not exist!');
    }

    const user = await User.findById({ '_id': oldaccount.user})
    
    //send email
    const name = user.name;
    sendMail.returnRequestEMail(email, invoice, content, name)

    //success
    res.status(200).json({ msg: "Email sent successfully. We will contant you soon!" })
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
})



module.exports = {
    returnRequest
}