var clubs = [
    club1 = {
        name: "luluzinha",
        id: 1,
        type: "mistery",
        participants: ["helly", "samara"],
        books: ["sherlock holmes", "how is this woman?"],
   },
    club2 = {
        name: "pocs",
        id: 2,
        type: "love story",
        participants: ["grobi"],
        books: ["me before you",],
   },
];

exports.get = (req, res, next) => {
    const response = req.params.id ? clubs[req.params.id - 1] : clubs
    res.status(200).send(response);
}

exports.delete = (req, res, next) => {
    const response = "got a DELETE request at /:id";
    res.status(200).send(response);
}

exports.put = (req, res, next) => {
    const response = "got a PUT request at /:id";
    res.status(200).send(response);
}

exports.post = (req, res, next) => {
    const response = "got a POST request at /:id";
    res.status(200).send(response);
}
