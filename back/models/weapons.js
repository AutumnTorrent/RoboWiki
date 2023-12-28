const mongoose = require('../connection.js');

const weaponsSchema = new mongoose.Schema({
    name: String,
    type: String,
    base_dmg: String,
    firerate: String,
    range: String,
    crit_multiplier: String,
    ammo: String,
    altfire: String
});

const Weapons = mongoose.model('Weapons', weaponsSchema);

module.exports = Weapons;