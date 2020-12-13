import './styles.css';
import menuData from './menu.json';
import menuTemplate from './templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');
const toggleRef = document.querySelector('#theme-switch-toggle');
const ulRef = document.querySelector('.js-menu');

const markup = menuTemplate(menuData);
ulRef.insertAdjacentHTML('beforeend', markup);

const settings = localStorage.getItem('settings');
bodyRef.classList.add(settings);

if (settings === 'dark-theme') {
  toggleRef.checked = true;
}

function changeTheme() {
  bodyRef.className = '';
  if (toggleRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('settings', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('settings', Theme.LIGHT);
  }
}

toggleRef.addEventListener('change', changeTheme);
