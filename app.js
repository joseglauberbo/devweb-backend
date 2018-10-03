const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const cache = require('memory-cache');
const mongoose = require('mongoose');

//usando mongooose
mongoose.connect('mongodb://localhost/test',  {useNewUrlParser: true});

//mostrar no terminal as requisições
const morgan = require('morgan');
app.use(morgan('tiny'));

//body-parser
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();  // sem o next, a chamada para aqui, isso é necessário por que várias rotas podem corresponder a uma solicitação recebida.
});

//routes 
const user = require('./src/user/userRoute');
const index = require('./src/index/indexRoute');
const admin = require('./src/admin/adminRoute');
const club = require('./src/club/clubRoute');
const bookcase = require('./src/bookcase/bookcaseRoute');

app.use('/', index);
app.use('/user', user);
app.use('/admin', admin);
app.use('/club', club);
app.use('/bookcase', bookcase);

//static images
app.use('/imagem', express.static(__dirname+'/static'));

//usando a variável de ambiente
app.listen(PORT, () => {
	console.log(`Example app listening on port ${3000}`);
});

//fazendo com que seja acessível
module.exports = app;