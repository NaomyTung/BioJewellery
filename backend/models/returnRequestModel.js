const mongoose = require('mongoose');
const returnRequestSchema = new mongoose.Schema({
    reason:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'P'
    }
});

module.exports = mongoose.model('ReturnRequest', returnRequestSchema);