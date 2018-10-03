var Bookcase = require ('../bookcase/bookcase.model');

exports.showAllBookcases = (req, res) => {
    Bookcase.find({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.showBookcase = (req, res) => {
    Bookcase.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.newBookcase = (req, res) => {
    var newBookcase = new Bookcase(req.body);
    newBookcase.save({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.updateBookcase = (req, res) => {
    Bookcase.updateOne()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.deleteBookcase = (req, res) => {
    Bookcase.deleteOne(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};