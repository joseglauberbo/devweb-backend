const express = require('express');
const router = express.Router();
const controller = require('./bookController');

router.get("/", controller.showAllBook);
router.get('/:id', controller.showBook);
router.post('/', controller.newBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;