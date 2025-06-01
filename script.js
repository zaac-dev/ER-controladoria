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

const rolling = document.getElementById('rolling');

// Duplica automaticamente as imagens só uma vez
const base = rolling.innerHTML;
while (rolling.scrollWidth < window.innerWidth * 2) {
  rolling.innerHTML += base;
}


let position = 0;
const speed = 1; // px por frame

function animateSlider() {
  position -= speed;

  const halfWidth = rolling.scrollWidth / 2;

  if (Math.abs(position) >= halfWidth) {
    position = 0;
  }

  rolling.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateSlider);
}

window.addEventListener('load', animateSlider);
