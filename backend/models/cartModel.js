const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },       
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, {
    timestamps: true
});


module.exports = mongoose.model('Cart', cartSchema);