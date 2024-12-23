'use strict';

let express = require('express');
let router = express.Router();
let notificationCtrl = require('./notification.controller');
let auth = require('../../../middlewares/auth.midddleware');

// :: Prefix Path --- '/api/v1/notification' 

router.get('/all', auth.validate, notificationCtrl.fetchUserWise);
router.post('/save', notificationCtrl.save);
router.delete('/remove', auth.validate, notificationCtrl.deleteNotification);

module.exports = router;