const express = require('express')
const router = express.Router()
const {
  registerAccount,
  loginAccount,
  getAccount,
  updateAccount,
  suspendAccount,
  appealAccount,
  forgotPassword,
  resetPassword
} = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')
const authPassword = require('../middleware/passwordMiddleware')

router.route('/').post(registerAccount).get(getAccount);
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', authPassword, resetPassword)
router.post('/login', loginAccount)
//router.get('/me', protect)
router.put('/update', updateAccount)
module.exports = router
