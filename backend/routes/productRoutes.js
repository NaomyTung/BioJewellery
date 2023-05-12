const express = require('express'); 
const router = express.Router();
const {getAllByAvailableProducts, getAllProducts, getProduct, setProduct, updateProduct, sortProducts } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/ImageMiddleware');
const { createProductInStripe, updateProductPriceInStripe } = require('../controllers/stripeController')


router.route('/allAvailable').get(getAllByAvailableProducts)
router.route('/all').get(getAllProducts)

router.route('/sort/:sortType').get(sortProducts)

router.route('/:name').get(upload.none(), getProduct);
router.route('/').post( upload.single('image'), createProductInStripe, setProduct);
router.route('/').put( upload.single('image'), updateProductPriceInStripe, updateProduct );


module.exports = router;