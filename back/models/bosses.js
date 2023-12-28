const mongoose = require('../connection.js');

const bossesSchema = new mongoose.Schema({
    name: String,
    description: String,
    name_attak1: String,
    description1: String,
    name_attak2: String,
    description2: String,
    name_attak3: String,
    description3: String,
    name_attak4: String,
    description4: String
});

const Bosses = mongoose.model('Bosses', bossesSchema);

module.exports = Bosses;
