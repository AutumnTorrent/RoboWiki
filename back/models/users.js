const mongoose = require('../connection.js');

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
}, {
    versionKey: false
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;