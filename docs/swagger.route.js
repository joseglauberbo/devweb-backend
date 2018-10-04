const express = require('express');
const router = new express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js');
 
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;