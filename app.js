const express = require('express');
const app = express();
const router = express.Router();

//mostrar no terminal as requisições
const morgan = require('morgan');
app.use(morgan('tiny'));

const user = require('./user/userRoute');
const index = require('./index/indexRoute');
const admin = require('./admin/adminRoute');
const club = require('./club/clubRoute');
const bookcase = require('./bookcase/bookcaseRoute');

app.use('/', index);
app.use('/user', user);
app.use('/admin', admin);
app.use('/club', club);
app.use('/bookcase', bookcase);

app.use('/imagem', express.static(__dirname+'/static'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
