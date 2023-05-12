const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        default: "Needs a name",
        unique: true
    },
    description:{
        type:String,
        required:true,
        default:"Enter a new description"
    },
    price: {
        type: Number,
        required:true,
        default:0
    },
    stripeProductId:{
        type: String,
        required:true
    },
    priceApiId:{
        type: String,
        required:true
    },
    quantity: {
        type:Number,
        required: true,
        default:0
    },
    type:{
        type:String,
        required:false,
        default:"No Type"
    },
    colour: {
        type:String,
        required:false,
        default:"No Colour"
    },
    onSale: {
        type:Boolean,
        required:false,
        default:false
    },
    isPopular: {
        type:Boolean,
        required:false,
        default:false
    },
    isVisible: {
        type:Boolean,
        required:false,
        default:true
    },
    isAvailable:{
        type:Boolean,
        required:false,
        default:true
    },
    salePercent: {
        type:Number,
        required:false,
        default:0
    },
    cloudinaryId:{
        type:String,
        required: true
    },
    imageUrl:{
        type:String,
        required: true
    }
});

productSchema.virtual('finalPrice').get(function(){
    return (this.price - (this.price * (this.salePercent / 100)))
})

module.exports = mongoose.model('Product', productSchema);