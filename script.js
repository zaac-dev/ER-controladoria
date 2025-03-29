const hamburguer = document.querySelector('.hamburger');
const navList = document.querySelector('.nav');

hamburguer.addEventListener('click', () => 
    navList.classList.toggle('active'));
