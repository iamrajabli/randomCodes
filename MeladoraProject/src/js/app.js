import bar from './modules/bar.js';
import navBg from './modules/navBg.js';

window.addEventListener('DOMContentLoaded', () => {
    bar('.burger__menu .fa-bars', 'nav ul', 'd-flex', 'rotate-90');
    navBg();
})