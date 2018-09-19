const express = require('express');
const router = express.Router();
const controller = require('./userController');

router.get('/', controller.showAllUsers);
router.get('/:id', controller.showUser);
router.post('/', controller.newUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
