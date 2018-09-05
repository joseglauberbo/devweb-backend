const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.get);
router.post('/login', controller.post)

module.exports = router;