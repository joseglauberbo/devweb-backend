const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const cache = require('memory-cache');
const mongoose = require('mongoose');
const cors = require('cors');
var http = require('http');
var server = http.createServer(app);

var options = {
        app:{ socketOptios: {keepAlive: 1, connectTimeoutMS: 30000}},
        replset:{ socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 }}
};

//usando mongooose
mongoose.connect('mongodb://localhost/test',  {useNewUrlParser: true});

//body-parser
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next(); 
});

//routes 
const index = require('./index');
const user = require('./src/user/userRoute');
const club = require('./src/club/clubRoute');
const bookcase = require('./src/bookcase/bookcaseRoute');
const authentication = require('./src/authentication/authenticationRoute');
const swagger = require('./docs/swagger.route.js')

app.use('/', index);
app.use('/user', user);
app.use('/club', club);
app.use('/bookcase', bookcase);
app.use('/authentication', authentication);
app.use('/docs', swagger);

//static images
app.use('/imagem', express.static(__dirname+'/static'));

//usando a variável de ambiente
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//fazendo com que seja acessível
module.exports = app;