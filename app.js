const express = require('express');
const app = express();
const router = express.Router();

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const user = require('./routes/user');
const index = require('./routes/index');
const admin = require('./routes/admin');

app.use('/', index);
app.use('/user', user);
app.use('/admin', admin);

module.exports = app;
