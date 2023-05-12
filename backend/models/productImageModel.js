const mongoose = require('mongoose');
const productImages = new mongoose.Schema({
    source:{
        data: Buffer,
        contentType: String
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }
});

module.exports = mongoose.model('ProductImages', productImages);