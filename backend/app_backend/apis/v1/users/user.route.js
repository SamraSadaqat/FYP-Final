'use strict';

let express = require('express');
let userCtrl = require('./user.controller');
let auth = require('../../../middlewares/auth.midddleware');
let router = express.Router();


// :: Prefix Path --- '/api/v1/user'


router.post('/register', userCtrl.register);
router.post('/login', userCtrl.auth);
router.post('/forget', userCtrl.forget);
router.post('/validateforgetlink', userCtrl.validate_forgetlink);
router.post('/updatepassword', auth.validate, userCtrl.update_password);
router.post('/verifypassword', auth.validate, userCtrl.verify_password);
router.post('/verifyToken', userCtrl.validate_token);
//Get Apis/v1
// auth.validate

router.get('/all-users', userCtrl.getAllUsers);
router.get('/getuserprofile' , auth.validate , userCtrl.getUserProfile)
// PUT
module.exports = router;