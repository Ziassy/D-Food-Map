const DarkMode = {
  init({ toggle, theme }) {
    toggle.addEventListener('click', (event) => {
      this._switchTheme(event);
    });

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  },

  _switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  },

};

export default DarkMode;
