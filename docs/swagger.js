const swaggerJSDOC = require('swagger-jsdoc');

const swaggerDef = {
    'basePath': '/',
    'host': 'localhost:3000',
    'info': {
        'description': 'Controle de leitura de livros',
        'title': 'Não sei :(',
        'version': '1.4.1'
    }
};

const options = {
    'apis': ['../**/*.docs.js'],
    'swaggerDefinition': swaggerDef
};

module.exports = swaggerJSDOC(options);