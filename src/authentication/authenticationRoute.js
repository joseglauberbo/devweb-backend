const express = require('express');
const router = express.Router();
const controller = require('./authenticationController');

router.route('/')
    .post(controller.login);

module.exports = router;