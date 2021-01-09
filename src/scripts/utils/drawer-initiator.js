const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },
  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.toggle('show-x');
    drawer.classList.toggle('show');
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.remove('show-x');
    drawer.classList.remove('show');
  },

};

export default DrawerInitiator;
