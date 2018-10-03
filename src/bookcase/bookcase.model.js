var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookcaseSchema = new mongoose.Schema({
 id: Number,
 capacity: Number,
 });

var Bookcase = mongoose.model('Bookcase', bookcaseSchema);
module.exports = Bookcase;