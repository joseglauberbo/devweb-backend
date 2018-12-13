var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new mongoose.Schema({

	nome: {
		type: String,
		required: true
	},
	descricao: {
		type: String,
		required: true
	},
	imagem: {
		type: String,
		required: true
	},
	genero: {
		type: String,
		required: true
	}
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;