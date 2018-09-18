const express = require('express');
const router = express.Router();
const controller = require('./adminController');

router.get('/', controller.showAdmin);
router.post('/', controller.newAdmin);

module.exports = router;
