
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("../models");
const User = db.user;

const login = async (req,res) =>{

    try {
        User.findOne({ where: {email: req.body.email} }).then((user) => {
            if(!user){
                return res.status(401).json({ error: true, message: 'user and password not found'});
            }

            console.log(req.body.password);
            console.log(user.password);
            console.log(req.body.password === user.password); // Compara sin bcrypt

            let passwordValidate = bcrypt.compareSync(req.body.password, user.password);

            console.log(passwordValidate);

            if(!passwordValidate){
                return res.status(401).json({ error: true, message: 'password not found'});
            }
            let token = jwt.sign({id:user.id},"abcdefghijklmnopqrstuvwxyz",{
                expiresIn:86000
            });

            let data = {user,token}
            res.status(200).json({ error: false, message: 'Acceso permitido', data: data });
        });
    }  
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }
}

module.exports = login;