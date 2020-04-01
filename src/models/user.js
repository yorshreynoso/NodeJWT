const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

//encriptar nuestro password utilizando bcryptjs
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);  //numero e pasadas a encriptar
    return bcrypt.hash(password, salt);  //convierte un string a caracteres especiales

}

module.exports = model('User', userSchema);