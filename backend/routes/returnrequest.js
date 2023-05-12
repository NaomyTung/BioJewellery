const express = require('express')
const router = express.Router()
const {
  returnRequest
} = require('../controllers/returnController')


router.post('/', returnRequest)


module.exports = router
