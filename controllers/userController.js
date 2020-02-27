const ModelUser = require (`../models`).User

class UserController {

    static registerForm (req, res) {
        res.render(`register`, { session:req.session.user })
    }

    static addRegister (req, res) {
        let obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role: req.body.role,
            address: req.body.address,
            username: req.body.username,
            password: req.body.password
        }
        // res.send(obj)
        ModelUser.create(obj)
        .then(data => {
            res.redirect(`/login`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = UserController