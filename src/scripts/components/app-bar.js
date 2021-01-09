class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar">
            <img src="./icons/Logo.png" alt="DFood-map">
            <button aria-label="hamburger menu" tabindex="0" id="burger" class="burger">
                <div class="line"></div>
                <div class="line"></div>
            </button>
            <ul id="nav-list">
                <li class="link"><a href="#/home">Home</a></li>
                <li class="link"><a href="#/favorite">Favorite</a></li>
                <li class="link"><a href="https://www.linkedin.com/in/pauziah-9a514b177/" target="_blank"
                        rel="noreferrer">About Us</a>
                </li>
                <li>
                    <div tabindex="0" class="toggle-switch">
                        <label class="mode-switch" for="checkbox">
                            <input aria-label="checkbox for dark mode or light mode" type="checkbox" id="checkbox" />
                            <div class="slider round"></div>
                        </label>
                    </div>
                </li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
