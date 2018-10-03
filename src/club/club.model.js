var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clubSchema = new mongoose.Schema({
 name: {
 	type: String, 
 	lowercase: true, 
 	unique: true, 
 	required: [true, "can't be blank"], 
 	match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
	 index: true},
 type: String,
 id: Number,
 participants: [],
 books: [],
 });

var Club = mongoose.model('Club', clubSchema);
module.exports = Club;