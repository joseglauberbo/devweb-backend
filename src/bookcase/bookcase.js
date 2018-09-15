var mongoose = require('mongoose');

var bookCase = new mongoose.Schema({
 id: Number,
 capacity: Number,
 });

mongoose.model('Bookcase', UserSchema);