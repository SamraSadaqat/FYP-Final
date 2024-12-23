var multer = require('multer');

//multer.diskStorage() creates a storage space for storing files. 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, './assets/images');
        }
        if (file.mimetype === 'video/mp4') {
            cb(null, './assets/videos');
        } else {
            cb({
                message: 'this file is neither a video or image file'
            }, false)
        }
    },
    filename: (req, file, cb) => {
        let filename = file.originalname.split('.');
        cb(null, filename[0] + '_' + new Date().getTime() + '.' + filename[1])
    }
})
var upload = multer({
    storage: storage
});
module.exports = upload;