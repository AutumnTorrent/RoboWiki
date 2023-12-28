const express = require('express');
const router = express.Router();

const {
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
} = require('../controllers/pagedata');

router.get('/bosses', getBosses);
router.get('/classes', getClasses);
router.get('/guardian', getClassesGuadian);
router.get('/recon', getClassesRecon);
router.get('/engineer', getClassesEngineer);
router.get('/commando', getClassesCommando);
router.get('/ranger', getClassesRanger);
router.get('/elementalist', getClassesElementalist);
router.get('/enemies', getEnemies);
router.get('/gadgets', getGadgets);
router.get('/items', getItems);
router.get('/weapons', getWeapons);

module.exports = router;
