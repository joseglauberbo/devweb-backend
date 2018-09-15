const express = require('express');
const router = express.Router();
const controller = require('./adminController');

router.get('/', controller.get);

module.exports = router;
