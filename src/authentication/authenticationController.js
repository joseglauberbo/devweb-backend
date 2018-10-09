const jsonWebToken = require('jsonwebtoken');
const userController = require('../user/userController');
const autheticationConfig = require('../../config/authentication');


exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
}
 

exports.showAllUsers = (req, res) => {
    User.find({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};