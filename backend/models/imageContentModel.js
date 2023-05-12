const mongoose = require('mongoose');
const imageContentSchema = new mongoose.Schema({
    source:{
        type:Image,
        required:true
    }
});


module.exports = mongoose.model('ImageContent', imageContentSchema);