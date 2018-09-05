const express = require('express');
const router = express.Router();
const controller = require('./indexController');

router.get('/', controller.get);

module.exports = router;
