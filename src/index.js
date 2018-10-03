const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const response = 'Bem vindo!';
    res.status(200).send(response);
});

module.exports = router;
