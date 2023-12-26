const Students = require('../models/students');

const getStudents = (async (req, res) => {
    const result = await Students.find()
    res.send(result);
});

const getStudentByID = (async (req, res) => {
    let user_id = req.params.id;
    const result = await Students.find({ _id: user_id })
    res.send(result);
});

const addStudent = (async (req, res) => {
    let new_student = req.query;
    const search_student = await Students.find({ _id: new_user._id })
    if (search_student.length == 0) {
        const result = await Students.create(new_student);
        res.send(result)
    } else {
        res.send("Пользователь с таким id существует.")
    }
});

const updateStudent = async (req, res) => {
    let upadate_student = req.query;
    let student_id = req.query._id;
    const search_student = await Students.find({ _id: student_id });
    if (search_student.length == 0) {
        res.send(`Пользователь не найден`);
    } else {
        const result = await Students.updateOne({ _id: student_id }, { $set: { name: upadate_student.name, surname: upadate_student.surname } });
        res.send(result);
    }
};

const deleteStudent = async (req, res) => {
    let student_id = req.params.id;
    const search_student = await Students.find({ _id: student_id });
    if (search_student.length == 0) {
        res.send(`Пользователь не найден`);
    } else {
        result = await Students.findOneAndDelete({ _id: student_id })
        res.send('Пользователь удален');
    }
};

module.exports = {
    getStudents,
    getStudentByID,
    addStudent,
    updateStudent,
    deleteStudent
};