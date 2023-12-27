// const nav_item_log = document.getElementById("nav_item_log");
// const nav_item_reg = document.getElementById("nav_item_reg");
// const log_cont = document.getElementById("log_cont");
// const reg_cont = document.getElementById("reg_cont");
// const menu_line = document.getElementById("menu_line");

// nav_item_log.addEventListener('click', () => {
//     log_cont.classList.add("show_content")
//     reg_cont.classList.remove("show_content")
//     menu_line.classList.add("on_log");
//     menu_line.classList.remove("on_reg");
// });

// nav_item_reg.addEventListener('click', () => {
//     reg_cont.classList.add("show_content");
//     log_cont.classList.remove("show_content")
//     menu_line.classList.add("on_reg");
//     menu_line.classList.remove("on_log");
// });
const register_form = document.getElementById('register_form')
register_form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // const form_data = new FormData(register_form);
    // const user_info = Object.fromEntries(form_data);
    console.log(user_info);
    await fetch('http://localhost:3000/api/users/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: 'asd',
            email: 'asd@asd.asd',
            pass: 'asd'
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(`что-то пошло не так: ${error}`);
        })
})

// const login_form = document.getElementById('login_form');

