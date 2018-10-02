var Admin = require('../admin/admin.model');

exports.showAllAdmins = (req, res) => {
    Admin.find({})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.showAdmin = (req, res) => {
    Admin.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.newAdmin = (req, res) => {
    var newAdmin = new Admin(req.body);
    newAdmin.save(function (err){
        if (err) {
            res.status(500).json({ error: err.message});
            res.end();
            return;
        }
        res.json(newAdmin);
        res.end();
    });        
}

exports.updateAdmin = (req, res) => {
    Admin.updateOne()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};

exports.deleteAdmin = (req, res) => {
    Admin.deleteOne(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
};