import menu from './menu.json';
import templates from './templates/templates.hbs';


const menuEl = document.querySelector('.js-menu');
const menuCards = menuGallery(menu);
menuEl.insertAdjacentHTML('beforeend', menuCards);

function menuGallery(menu) {
  return menu
    .map(templates)
    .join('');
}