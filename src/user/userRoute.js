const express = require('express');
const router = express.Router();
const controller = require('./userController');

router.get('/', controller.showUser);
router.post('/', controller.newUser)

module.exports = router;
