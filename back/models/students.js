const mongoose = require('../connection.js');

const studentsSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    surname: String
})

const Students = mongoose.model('Students', studentsSchema);

module.exports = Students;