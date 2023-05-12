const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({

    email:{
        type:String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    active:{
        type:String,
        required:true,
        default:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Account', accountSchema);