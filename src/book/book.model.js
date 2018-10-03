var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new mongoose.Schema({
	id: string,
	etag: string,
	volumeInfo: {
		title: string,
		subtitle: string,
		authors: [
			string
		],
		publisher: string,
		publishedDate: string,
		description: string,
		pageCount: integer,
		printType: string,
		imageLinks: {
			smallThumbnail: string,
			thumbnail: string,
			small: string,
			medium: string,
			large: string,
			extraLarge: string
		},
		language: string,
	},
});

var Book = mongoose.model('Book', UserSchema);
module.exports = Book;