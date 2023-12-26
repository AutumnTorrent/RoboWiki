const express = require('express');
const router = express.Router();

const{
    regUsers,
    logUsers
} = require('../controllers/users');

router.post('/register', regUsers);
router.post('/login', logUsers);

module.exports = router;