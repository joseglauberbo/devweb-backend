var bookcases = [
    bookcases1 = {
        id: 1,
        capacity: 25,
    },
    bookcases2 = {
        id: 2,
        capacity: 30, 
    },
];

exports.get = (req, res, next) => {
    const response = req.params.id ? bookcases[req.params.id - 1] : bookcases
    res.status(200).send(response);
}