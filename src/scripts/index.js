import 'regenerator-runtime'; /* for async await transpile */
import './components/app-bar';
import './components/hero-app';
import './components/footer';
import './components/skip-content';
import '../styles/main.css';
import '../styles/restaurant.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/dark-theme.css';
import '../styles/custom.css';
import '../styles/detail.css';
import '../styles/form.css';
import '../styles/skeleton.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
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
