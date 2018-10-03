const express = require('express');
const router = express.Router();
const controller = require('./clubController');

router.get('/', controller.showAllClubs);
router.get('/:id', controller.showClub);
router.post('/', controller.newClub);
router.put('/:id', controller.updateClub);
router.delete('/:id', controller.deleteClub);

module.exports = router;

