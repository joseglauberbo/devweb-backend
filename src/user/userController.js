var User = require('../user/user.model'); 

exports.showUser = (req, res) => {
    var user = req.body;
    res.status(200).send(user);
};

exports.newUser = (req, res) => {
    var newUser = new User(req.body);
    newUser.save(function (err){
        if (err) {
            res.status(500).json({ error: err.message});
            res.end();
            return;
        }
        res.json(newUser);
        res.end();
    });        
}


