// lunanny and swifties neo-jquery easter egg
class TaylorQuotes extends HTMLElement {
  constructor() {
    super();
    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';

    document.head.append(fonts);
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    const styles = document.createElement('style');

    styles.textContent = `      
      :host {
        font-family: 'Pacifico', cursive;
      }
      
      .quote, .cite {
        display: block;
        color: #fff;
        font-weight: bolder;
        cursor: pointer;
      }
      
      .quote {
        font-size: 36px;
        position: relative;
        text-shadow: #fff 0 0 12px, #ff3aad 0 0 24px, #ff3aad 0 0 36px;
      }
      
      .cite {
        margin-top: 6vh;
        font-size: 36px;
        text-shadow: #fff 0 0 12px, #9900F0 0 0 24px, #9900F0 0 0 36px;
      }
    `;

    const quote = document.createElement('q');
    quote.classList.add('quote');

    const cite = document.createElement('cite');
    cite.classList.add('cite');

    fetch('https://taylorswiftapi.onrender.com/get')
      .then(res => res.json())
      .then(data => {
        quote.cite = data.song;
        quote.textContent = data.quote;
        quote.title = `song: ${data.song}`;

        cite.textContent = `album: ${data.album}`;

        shadowRoot.append(styles, quote, cite);
      })
      .catch(err => {
        shadowRoot.textContent = err.message
      });
  }
}

customElements.define('taylor-quotes', TaylorQuotes);
