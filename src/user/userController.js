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

exports.getUserByEmail = (email) => {
    return User.findOne({'email': email});
}

exports.newUser = (req, res) => {
    var newUser = new User(req.body);
    newUser.save({})
    .then((result) => {
        res.status(400).json("User not created");
    })
    .catch((error) => {
        res.status(201).json("User created");
    })
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    User.findByIdAndUpdate(userId, req.body)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId, req.body)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};