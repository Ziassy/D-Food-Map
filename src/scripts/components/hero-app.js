class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbo-tron ml-20 mr-20 mb-20">
        <div class="gradient__dark">
            <p class="title__tron">Best Food In Town</p>
            <h1 class="desc__tron">Delivery <mark>Food</mark><br>
                from the Best
                Restaurants
            </h1>
        </div>
    </div>
          `;
  }
}

customElements.define('hero-app', HeroBar);
