const mongoose = require('../connection.js');

const enemiesSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Enemies = mongoose.model('Enemies', enemiesSchema);

module.exports = Enemies;
