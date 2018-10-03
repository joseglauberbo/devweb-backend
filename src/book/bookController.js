var Book = require ('../book/book.model');

exports.showAllBook = (req, res) => {
    Book.find({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.showBook = (req, res) => {
    Book.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.newBook = (req, res) => {
    var newBook = new Book(req.body);
    newBook.save({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.updateBook = (req, res) => {
    const bookId = req.params.id;
    Book.findByIdAndUpdate(bookId, req.body)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.deleteBook = (req, res) => {
    const bookId = req.params.id;
    Book.findByIdAndDelete(bookId, req.body)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};