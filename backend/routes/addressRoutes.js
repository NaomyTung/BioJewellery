const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getAddress, getAddresses, createAddress, updateAddress, deleteAddress } = require('../controllers/addressController');


router.route('/').put(protect, updateAddress);
router.route('/:userId').get(protect, getAddress)
module.exports = router;
