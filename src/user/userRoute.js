const express = require('express');
const router = express.Router();
const controller = require('./userController');

router.get('/', controller.get);
router.get('/:id', controller.get);
router.post('/login', controller.newUser)

module.exports = router;
