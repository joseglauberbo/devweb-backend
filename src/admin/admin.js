var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var AdminSchema = new mongoose.Schema({
 username: {
 	type: String, 
 	lowercase: true, 
 	unique: true, 
 	required: [true, "can't be blank"], 
 	match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
 	index: true},
 email: {
 	type: String, 
 	lowercase: true, 
 	unique: true, 
 	required: [true, "can't be blank"], 
 	match: [/\S+@\S+\.\S+/, 'is invalid'], 
 	index: true},
 password: {
  	type: String,
  	required: [true, "can't be blank"], 
 },
 id: Number,
 age: Number,
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('Admin', UserSchema);