const mongoose = require('mongoose');

//para conectar a bd abrir consola y correr comando-> mongod
mongoose.connect('mongodb://localhost/jwtdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(db => console.log('Database is connected!'));

module.exports = mongoose;


//steps to use mongodb from terminal
// new console and use the comand ->  mongo     to start mongodb
// see database, command show dbs
// to set any db use command  use ourDatabase   in this example i used  use jwtdb
// to see the collection use command  show collections
// to see information use db.users.find()   
// if we want to see the code in a good way use command pretty()     db.users.find().pretty()