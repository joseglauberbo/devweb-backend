var Admin = require('../user/user.model');

exports.showAdmin = (req, res) => {
    const response = req.params.id ? users[req.params.id - 1] : admins
    res.status(200).send(response);
};

exports.newAdmin = (req, res) => {
    var newAdmin = new Admin(req.body);
    newAdmin.save(function (err){
        if (err) {
            res.status(500).json({ error: err.message});
            res.end();
            return;
        }
        res.json(newUser);
        res.end();
    });        
}
