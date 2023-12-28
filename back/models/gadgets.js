const mongoose = require('../connection.js');

const gadgetsSchema = new mongoose.Schema({
    name: String,
    effects: String,
    where_to_find: String
});

const Gadgets = mongoose.model('Gadgets', gadgetsSchema);

module.exports = Gadgets;
