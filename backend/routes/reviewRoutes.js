const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getReview, createReview, respondToReview, deleteReview } = require('../controllers/reviewController');

router.route('/').get(getReview).post(protect, createReview);
router.route('/:name').get(getReview)
router.route('/:reviewId').put(protect, respondToReview)
router.route('/delete/:reviewId').put(protect, deleteReview);




module.exports = router;