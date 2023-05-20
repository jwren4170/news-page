const mobileMenuOpen = document.getElementById('menu-open-icon');
const mobileMenuClose = document.getElementById('menu-close-icon');

const menu = document.querySelector('.menu');

mobileMenuOpen.addEventListener('click', () => {
  menu.classList.toggle('active');
  mobileMenuOpen.style.display = 'none';
  mobileMenuClose.style.display = 'block';
});

mobileMenuClose.addEventListener('click', () => {
  menu.classList.toggle('active');
  mobileMenuOpen.style.display = 'block';
  mobileMenuClose.style.display = 'none';
});
