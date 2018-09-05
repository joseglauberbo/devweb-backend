const express = require('express');
const router = express.Router();
const controller = require('./userController');

router.get('/', controller.get);
router.post('/login', controller.post)

module.exports = router;
