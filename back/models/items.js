const mongoose = require('../connection.js');

const itemsSchema = new mongoose.Schema({
    name: String,
    effects: String,
    cost: String
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;