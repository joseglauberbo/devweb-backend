var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookcaseSchema = new mongoose.Schema({
 id: Number,
 capacity: Number,
 usuario_id: {
	type: mongoose.SchemaTypes.ObjectId,
	ref: 'User',
	required: true},
 });

var Bookcase = mongoose.model('Bookcase', bookcaseSchema);
module.exports = Bookcase;