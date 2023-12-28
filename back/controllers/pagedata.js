const Bosses = require('../models/bosses');
const Classes = require('../models/classes');
const Enemies = require('../models/enemies');
const Gadgets = require('../models/gadgets');
const Items = require('../models/items');
const Weapons = require('../models/weapons');

const getBosses = async (req, res) => {
    const result = await Bosses.find()
    res.json(result);
};

const getClasses = async (req, res) => {
    const result = await Classes.find()
    res.json(result);
};

const getClassesGuadian = async (req, res) => {
    const result = await Classes.find()
    res.json(result[0]);
};

const getClassesRecon = async (req, res) => {
    const result = await Classes.find()
    res.json(result[1]);
};

const getClassesEngineer = async (req, res) => {
    const result = await Classes.find()
    res.json(result[2]);
};

const getClassesCommando = async (req, res) => {
    const result = await Classes.find()
    res.json(result[3]);
};

const getClassesRanger = async (req, res) => {
    const result = await Classes.find()
    res.json(result[4]);
};

const getClassesElementalist = async (req, res) => {
    const result = await Classes.find()
    res.json(result[5]);
};

const getEnemies = async (req, res) => {
    const result = await Enemies.find()
    res.json(result);
};

const getGadgets = async (req, res) => {
    const result = await Gadgets.find()
    res.json(result);
};

const getItems = async (req, res) => {
    const result = await Items.find()
    res.json(result);
};

const getWeapons = async (req, res) => {
    const result = await Weapons.find()
    res.json(result);
};

module.exports = {
    getBosses,
    getClasses,
    getClassesGuadian,
    getClassesRecon,
    getClassesEngineer,
    getClassesCommando,
    getClassesRanger,
    getClassesElementalist,
    getEnemies,
    getGadgets,
    getItems,
    getWeapons
}