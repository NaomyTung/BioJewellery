const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },reply:{
        type:String,
        required:true,
        default:'false'
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Review', reviewSchema)