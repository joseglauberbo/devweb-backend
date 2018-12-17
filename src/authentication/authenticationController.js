const jsonWebToken = require('jsonwebtoken');
const userController = require('../user/userController');
const authenticationConfig = require('../../config/authentication');


exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    userController.getUserByEmail(email)
        .then((user) => {
            if (!user) {
                return res.status(400).json("Failed. User not found.");
            } else if (user) {
                const verification = (email === user.email && password === user.password);
                if (verification) {
                    const token = jsonWebToken.sign({
                        _id: user._id,
                        email: user.email,
                    }, authenticationConfig.jwtSecret);
                    return res.status(201).json({ userID: user._id, token: token });
                } else {
                    return res.status(400).json("Failed. User not created");
                }
            }
        })
        .catch((err) => {
            return res.status(400).json('Error')
        }); 
};

exports.authenticate = (req, res, next) => {
    console.log("testando");
    let token = undefined;
    if (req.headers['authorization']) {
        token = req.headers['authorization'].split(" ")[1];
    } else {
        token = req.body.token;
    }
    if(token) {
        try {
            const data = (decodeToken(token));
            if(data) {
                req._id = data._id;
                req.email = data.email;
                next();
            } else {
                return res.json({ 'message':'Failed to decode. Wrong token.' });
            }
        } catch (error) {
            console.log(error);
            return res.json({ 'message':'Something went wrong, try again.', 'error': error.message });
        }
    } else {
        return res.json({ 'message':'Failed to authenticate. Unreachable token.' });
    }
}

exports.authById = (req, res, next) => {
    const userId = req._id;
    if (userId) {
        const reqId = req.params.idUser;
        if (userId === reqId) {
            next();
        } else {
            return res.json({ 'message':'Failed. Unauthorized user.' });
        }
    } else {
        return res.json({ 'message':'Something went wrong, try again.' });
    }
}

const decodeToken = (token) => {
    return jsonWebToken.verify(token, authenticationConfig.jwtSecret);
}