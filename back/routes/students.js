const express = require('express');
const router = express.Router();

const { getStudents, getStudentByID, addStudent, updateStudent, deleteStudent } = require('../controllers/students');

router.get('/', getStudents);
router.get('/:id', getStudentByID);
router.post('/', addStudent);
router.put('/', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
