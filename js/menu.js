export default function mobileMenu() {
  const btnMenu = document.querySelector('.humbarger');
  const menu = document.querySelector('.mobile-nav-box');
  const nav = document.querySelector('.nav');
  let clickCount = 0;

  btnMenu.addEventListener('click', () => {
    clickCount++;
    if(clickCount%2!==0) {
      menu.style.display = 'flex';
      btnMenu.classList.add('fa-xmark');
      btnMenu.classList.remove('fa-bars');
    } else {
      menu.style.display = 'none';
      btnMenu.classList.add('fa-bars');
      btnMenu.classList.remove('fa-xmark');
    }
  })
}