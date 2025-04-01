const hamburguer = document.querySelector('.hamburger');
const navList = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav li'); 


hamburguer.addEventListener('click', () => 
    navList.classList.toggle('active'));


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('active'); 
    });
});


function openModal(articleId) {
    document.getElementById(articleId + 'Modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
  
function closeModal(articleId) {
    document.getElementById(articleId + 'Modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
  

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}