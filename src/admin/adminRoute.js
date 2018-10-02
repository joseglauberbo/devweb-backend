const express = require('express');
const router = express.Router();
const controller = require('./adminController');

router.get('/', controller.showAllAdmins);
router.get('/:id', controller.showAdmin);
router.post('/', controller.newAdmin);
router.put('/:id', controller.updateAdmin);
router.delete('/:id', controller.deleteAdmin);

module.exports = router;
