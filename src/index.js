const express = require('express');
const router = express.Router();
const controller = require('./indexController');

router.get('/', (req, res) => {
    const response = 'Bem vindo!';
    res.status(200).send(response);
});

module.exports = router;
