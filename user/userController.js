var users = [
    user1 = {
        username: 'grobi',
        email: 'grobi@hahaha.com',
        password: 'hahaha123456',
        id: 1,
        age: 21,
    },
    user2 = {
        name: 'helly',
        email: 'helly@hahaha.com',
        password: 'hahaha12345777',
        id: 2,
        age: 20,
    },
    user3 = {
        name: 'samara',
        email: 'samara@hahaha.com',
        password: 'hahaha12345888',
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



