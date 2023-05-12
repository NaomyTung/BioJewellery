const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getOrder, createOrder, updateOrder, cancelOrder } = require('../controllers/orderController');

router.route('/').post(protect, createOrder);

router.route('/:orderId').get(protect, getOrder).put(protect, updateOrder).delete(protect, cancelOrder);

module.exports = router;