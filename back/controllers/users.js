const Users = require('../models/users');

const regUsers = async (req, res) => {
    const new_user = req.body;
    const search_user_name = await Users.find({ name: new_user.name });
    const search_user_email = await Users.find({ email: new_user.email });
    if (search_user_name.length == 0 && search_user_email.length == 0) {
        await Users.create(new_user);
        res.redirect('http://localhost:3000/form_login.html')
        res.end();
    } else {
        // res.send(`таколь пользователь существует`)
        res.json({message: 'таколь пользователь существует'})
    };
}

const logUsers = async (req, res) => {
    const user = req.body;
    const search_user = await Users.find(user)
    if (search_user.length != 0) {
        res.redirect('http://localhost:3000/');
    } else {
        res.send(`пользоватлеь не найден`);
    }
}

module.exports = {
    regUsers,
    logUsers
};