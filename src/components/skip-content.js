class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#main-content" class="skip-link">Menuju ke Konten</a>
     `;
  }
}

customElements.define('skip-content', SkipContent);
