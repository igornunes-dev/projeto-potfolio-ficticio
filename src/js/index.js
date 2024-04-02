const btnMenu = document.querySelector('#btn-menu')
const menuMobile = document.querySelector('#menu-mobile')
const overlay = document.querySelector('#overlay-menu')
btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('open')
})

menuMobile.addEventListener('click', () => {
  menuMobile.classList.remove('open')
})

overlay.addEventListener('click', () => {
  menuMobile.classList.remove('open')
})