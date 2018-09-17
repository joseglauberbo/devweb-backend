var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
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
  	required: [true, "can't be blank"]},
 id: Number,
 age: Number,
});

var User = mongoose.model('User', UserSchema);

module.exports = User;