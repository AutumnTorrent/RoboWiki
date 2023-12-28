const Users = require('../models/users');

const regUsers = async (req, res) => {
    const new_users = req.body;
    const search_user = await Users.find({ $or: [{ name: new_users.name }, { email: new_users.email }] })
    console.log(search_user);
    if (search_user.length == 0) {
        await Users.create(new_users)
        res.json({ massage: 'успешная регистрация' })
    } else {
        res.json({ massage: 'Пользователь существует' })
    }
}

const logUsers = async (req, res) => {
    const user = req.body;
    const search_user = await Users.find(user)
    if (search_user.length != 0) {
        res.json({massage: `успех`});
    } else {
        res.json({ massage: `Не верные данные` });
    }
}

module.exports = {
    regUsers,
    logUsers
};