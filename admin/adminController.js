var admins = [
    admin1 = {
        name: 'Glauber',
        id: 1,
        age: 21,
        permission: 'yes',
    }
];

exports.get = (req, res, next) => {
    const response = req.params.id ? users[req.params.id - 1] : admins
    res.status(200).send(response);
};