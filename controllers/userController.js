var users = [
    user1 = {
        name: 'grobi',
        id: 1,
        age: 21,
    },
    user2 = {
        name: 'helly',
        id: 2,
        age: 20,
    },
    user3 = {
        name: 'samara',
        id: 3,
        age: 21,
    }
];

exports.get = (req, res, next) => {
    const response = req.params.id ? users[req.params.id - 1] : users
    res.status(200).send(response);
};

exports.post = (req, res, next) => {
    res.status(201).send("login realizado");
}



