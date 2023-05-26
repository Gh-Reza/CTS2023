export default function mobileMenu() {
  const btnMenu = document.querySelector('.humbarger');
  const menu = document.querySelector('.mobile-nav-box');
  let clickCount = 0;

  btnMenu.addEventListener('click', () => {
    clickCount += 1;
    if (clickCount % 2 !== 0) {
      menu.style.display = 'flex';
      btnMenu.classList.add('fa-mark');
      btnMenu.classList.remove('fa-bars');
    } else {
      menu.style.display = 'none';
      btnMenu.classList.add('fa-bars');
      btnMenu.classList.remove('fa-xmark');
    }
  });
}