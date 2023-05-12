const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({  
    street:{
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    province: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    },
    postalCode: {
        type:String,
        required:true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Address', addressSchema);