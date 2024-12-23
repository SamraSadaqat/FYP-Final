'use strict';

let express = require('express');
let router = express.Router();


// :: Prefix Path --- '/api/v1'

router.use('/user', require('../../apis/v1/users/user.route'));


module.exports = router;