const express = require('express');
const router = express.Router();
const controller = require('./authenticationController');

router.post('/', controller.login);

module.exports = router;