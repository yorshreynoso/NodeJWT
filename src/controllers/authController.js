const authController = {};
User = require('../models/user');
const config = require('../config');

const jwt = require('jsonwebtoken');

authController.signup = (async (req, res) => {
        const { username, email, password } = req.body;
        //console.log("username ", username, "  email: ", email ," password: ", password);
        const user = new User({
            username: username,
            email: email,
            password: password
        });

        user.password = await user.encryptPassword(user.password);
        await user.save();  //almacenamos en DB

        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 60 * 60 * 24     
        });  //secret es un tipo password para dar mas seguridad


        console.log(user);
        res.json( {auth: true, token});

});

authController.me = ((req,res) => {
    const token = req.headers['x-access-token'];    //se recibe cuando se envia un valor de tipo token
    if(!token) {
        return res.status(401).json({
            auth : false,
            message: "No token Provided"
        });
    }

    const decoded = jwt.verify(token, config.secret);       //decodifica el id de la forma que es

    
    console.log(decoded);
    res.send('vamo bien');
});

authController.signin = ((req, res) => {

});

module.exports = authController;