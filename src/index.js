import './styles.css';
import menuData from './menu.json';
import menuTemplate from './templates/menu.hbs';

const markup = menuTemplate(menuData);
const ulRef = document.querySelector('.js-menu');
ulRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
