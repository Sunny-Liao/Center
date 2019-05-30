var db = require("./../sql");
var jwt = require('jsonwebtoken');    //JSon based for creating access tokens

module.exports = function (app) {

    app.get('/what', function (req, res) {
        res.send("WHAT?");
    });

    app.post('/users', function (req, res) {
        let email = req.body.email;
        db.query(`SELECT * FROM user WHERE email != '${email}'`, function (err, data) {
            (err) ? res.send(err) : res.json({ users: data });
        });
    });

    app.post('/users/login', function (req, res) {
        let email = req.body.email;
        let password = req.body.password;

        db.query(`SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`, function (err, data) {
            if(err) {
                res.status(401).json({msg: "server error"});
            } else if(data.length > 0) {
            console.log("comes", Object.assign({}, data[0]));
                res.json({ user: jwt.sign(Object.assign({}, data[0]), "shh") });
            } else {
                res.status(404).json({msg: "not found"});
            }
        });
    });

    app.post('/users/register', function (req, res) {
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let password = req.body.password;
        db.query(`INSERT INTO user (firstname, lastname, email, password) VALUES ('${first_name}', '${last_name}', '${email}', '${password}')`, function (err, data) {
            (err) ? res.send(err) : res.json({ user: data });
        });
    });

    app.post('/send', function (req, res) {
        let email = req.body.email;
        let image = req.body.image;

        db.query(`INSERT INTO user_data (user_id, image ) VALUES ('${email}', '${image}')`, function (err, data) {
            (err) ? res.send(err) : res.json({ user: data });
        });
    });
};
