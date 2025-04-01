const hamburguer = document.querySelector('.hamburger');
const navList = document.querySelector('.nav');

hamburguer.addEventListener('click', () => 
    navList.classList.toggle('active'));

function openModal(articleId) {
    document.getElementById(articleId + 'Modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal(articleId) {
    document.getElementById(articleId + 'Modal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Fechar o modal ao clicar fora do conteúdo
  window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
        modals[i].style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  }