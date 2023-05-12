const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    ],
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
    startDate:{
        type:Date,
        required:true        
    }, 
    shipDate:{
        type:Date,
        required:false
    },
    receiveDate:{
        type:Date,
        required:false
    },
    trackingNumber:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:true,
        enum: ['P', 'S', 'C', 'R', 'V'], //p - pending, S - shipped, C - Complete, R - Returned, V - Void
        default:'P' 
    },
},{
    timestamps: true
});



module.exports = mongoose.model('Order', orderSchema);