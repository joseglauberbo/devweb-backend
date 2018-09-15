const express = require('express');
const router = express.Router();
const controller = require('./clubController');

router.get('/', controller.get);
router.get('/:id', controller.get);
router.delete('/:id', controller.delete);
router.put('/', controller.put);
router.post('/', controller.post);

//router.get('/:name', controller.get);
//router.get('/:type', controller.get);

module.exports = router;

