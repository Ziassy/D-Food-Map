import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components/app-bar';
import './components/hero-app';
import './components/footer';
import './components/skip-content';
import './styles';

import App from './app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#burger'),
  drawer: document.querySelector('#nav-list'),
  content: document.querySelector('#main-content'),
  theme: localStorage.getItem('theme'),
  toggle: document.querySelector('.toggle-switch'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
