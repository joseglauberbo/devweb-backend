const express = require('express');
const router = express.Router();
const controller = require('./userController');
const authentication = require('../authentication/authenticationController');

router.get('/', controller.showAllUsers);
router.get('/:id', authentication.authenticate, controller.showUser);
router.post('/', controller.newUser);
router.put('/:id', authentication.authenticate, authentication.authById, controller.updateUser);
router.delete('/:id', authentication.authenticate, controller.deleteUser)

module.exports = router;
