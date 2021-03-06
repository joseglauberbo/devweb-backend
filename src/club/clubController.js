var Club = require ('../club/club.model');

exports.showAllClubs = (req, res) => {
    Club.find({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.showClub = (req, res) => {
    Club.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.newClub = (req, res) => {
    var club = new Bookcase(req.body);
    club.save({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.updateClub = (req, res) => {
    const clubId = req.params.id;
    Club.findByIdAndUpdate(clubId, req.body)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.deleteClub = (req, res) => {
    const clubId = req.params.id;
    Club.findByIdAndDelete(clubId, req.body)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};