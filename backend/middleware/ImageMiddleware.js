const multer = require('multer');

//Multer config
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
            cb(null, true);
        } 
        else{
            cb(new Error("Sorry file type is not supported"), false);
            return;
        }
        
    }
});