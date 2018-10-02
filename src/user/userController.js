var User = require('../user/user.model'); 

exports.showAllUsers = (req, res) => {
    User.find({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.showUser = (req, res) => {
    User.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.newUser = (req, res) => {
    var newUser = new User(req.body);
    newUser.save({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.updateUser = (req, res) => {
    User.updateOne()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.deleteUser = (req, res) => {
    User.deleteOne(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};