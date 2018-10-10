const jsonWebToken = require('jsonwebtoken');
const userController = require('../user/userController');
const authenticationConfig = require('../../config/authentication');


exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    userController.getUserByEmail(email)
        .then((user) => {
            if (!user) {
                return res.json({ 'message': 'Failed. User not found.'});
            } else if (user) {
                const verification = (email === user.email && password === user.password);
                if (verification) {
                    const token = jsonWebToken.sign({
                        _id: user._id,
                        email: user.email,
                    }, authenticationConfig.jwtSecret);
                    return res.json({ userID: user._id, token });
                } else {
                    return res.json({ 'message': 'Failed. Wrong password'});
                }
            }
        })
        .catch((err) => {
            console.log(err);
            const error = {' message':'Something went wrong, try again. ', 'error': err.message };
            return res.json(error);
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