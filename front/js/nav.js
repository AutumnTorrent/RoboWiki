const container = document.getElementById('container');
const menu_btn = document.getElementById('menu_btn');
const cross_btn = document.getElementById('cross_btn');
const overlay = document.getElementById('overlay');

menu_btn.addEventListener('click', () => {
    container.classList.add("active");
});

cross_btn.addEventListener('click', () => {
    container.classList.remove("active");
});

overlay.addEventListener('click', () => {
    container.classList.remove("active");
});
