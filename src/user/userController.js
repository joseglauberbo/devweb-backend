const users = require('../user/user.model'); 

exports.get = (req, res) => {
    const response = req.params.id ? users[req.params.id - 1] : users
    res.status(200).send(response);
};

exports.newUser = (req, res) => {

    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
    });

    newUser.save();        
}


