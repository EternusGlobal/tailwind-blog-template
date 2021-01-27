const switchBtn = document.querySelector('.darkmode');
const htmlTag = document.querySelector('html');
const text = document.querySelector('.theme-label');
const scrollBtn = document.querySelector('.scroll-to-top');
const menu = document.querySelector('.hamburger');
const links = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.hamburger > i');

// Menu

const toggleMenu = () => {
  links.classList.toggle('hidden');
  if (!links.classList.contains('hidden')) {
    menuIcon.classList.replace('fa-bars', 'fa-times');
  } else {
    menuIcon.classList.replace('fa-times', 'fa-bars');
  }
};

const toggleSwitch = () => {
  if (switchBtn.checked) {
    darkMode();
  } else {
    lightMode();
  }
};

const lightMode = () => {
  htmlTag.classList.remove('dark');
  text.innerText = 'Light Mode';
  localStorage.setItem('theme', 'light');
};

const darkMode = () => {
  htmlTag.classList.add('dark');
  text.innerText = 'Dark Mode';
  localStorage.setItem('theme', 'dark');
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

switchBtn.addEventListener('change', toggleSwitch);
scrollBtn.addEventListener('click', scrollToTop);
menu.addEventListener('click', toggleMenu);

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.theme === 'dark') {
    htmlTag.classList.add('dark');
    text.innerText = 'Dark Mode';
    switchBtn.checked = true;
  } else {
    htmlTag.classList.remove('dark');
    text.innerText = 'Light Mode';
  }
});

window.addEventListener('resize', (e) => {
  if (e.target.innerWidth > 768) {
    links.classList.remove('hidden');
    menuIcon.classList.replace('fa-bars', 'fa-times');
  } else {
    links.classList.add('hidden');
    menuIcon.classList.replace('fa-times', 'fa-bars');
  }
});
