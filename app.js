const express = require('express');
const app = express();
const router = express.Router();

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const user = require('./user/userRoute');
const index = require('./index/indexRoute');
const admin = require('./admin/adminRoute');
const listOfBooks = require('/listOfBooks/listOfBooksRoute');

app.use('/', index);
app.use('/user', user);
app.use('/admin', admin);
app.use('/listOfBooks', listOfBooks);


app.use('/imagem', express.static(__dirname+'/static'));

module.exports = app;
