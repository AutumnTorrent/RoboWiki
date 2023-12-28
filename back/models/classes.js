const mongoose = require('../connection.js');

const classesSchema = new mongoose.Schema({
    name: String,
    Primary_Ability: String,
    Secondary_Ability: String,
    Passive_Ability: String
});

const Classes = mongoose.model('Classes', classesSchema);

module.exports = Classes;
