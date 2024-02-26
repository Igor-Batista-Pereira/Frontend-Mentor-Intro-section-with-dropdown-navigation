// const ham = document.querySelector('.ham')

//   ham.addEventListener('click', e=>{
//     document.querySelector('.mobile-nav').classList.add('show')
//     document.querySelector('.overlay').style.display = 'block'
//     document.querySelector('body').classList.add('lock')
//   })
//   document.querySelector('#close-Menu').addEventListener('click', e =>{
//     document.querySelector('.mobile-nav').classList.remove('show')
//     document.querySelector('.overlay').style.display = 'none'
//     document.querySelector('body').classList.remove('lock')
//   })

// Cache de seletores
const hamButton = document.querySelector('.ham');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const closeMenuButton = document.querySelector('#close-Menu');

// Função para abrir o menu
function openMenu() {
  mobileNav.classList.add('show');
  overlay.classList.add('show');
  body.classList.add('lock');
}

// Função para fechar o menu
function closeMenu() {
  mobileNav.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('lock');
}

// Adicionar listener para o botão de hambúrguer
hamButton.addEventListener('click', () => {
  openMenu();
});

// Adicionar listener para o botão de fechamento
closeMenuButton.addEventListener('click', () => {
  closeMenu();
});

// Adicionar listener para o overlay (fechar menu ao clicar no overlay)
overlay.addEventListener('click', () => {
  closeMenu();
});
