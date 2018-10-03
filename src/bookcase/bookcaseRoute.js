const express = require('express');
const router = express.Router();
const controller = require('./bookcaseController');

router.get("/", controller.showAllBookcases);
router.get('/:id', controller.showBookcase);
router.post('/', controller.newBookcase);
router.put('/:id', controller.updateBookcase);
router.delete('/:id', controller.deleteBookcase);

module.exports = router;