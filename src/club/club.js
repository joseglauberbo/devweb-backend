var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
 name: {
 	type: String, 
 	lowercase: true, 
 	unique: true, 
 	required: [true, "can't be blank"], 
 	match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
 	index: true},
 id: Number,
 type: String,
 participants: [],
 books: [],
 });

mongoose.model('Club', UserSchema);