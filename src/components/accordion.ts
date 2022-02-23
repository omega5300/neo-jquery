class Accordion extends HTMLElement {
  title!: string;
  constructor() {
    super();
    this.title;
  }

  static get observedAttribute(): string[] {
    return ['title'];
  }

  connectedCallback(): void {
    // shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' });
    
    // elements
    const styles = document.createElement('style');
    const accContainer = document.createElement('details');
    const accTitle = document.createElement('summary');
    const accPanel = document.createElement('slot');

    // styles accordion
    styles.textContent= `
      .accordion-title, ::slotted(.accordion-panel) {
        width: 100%;
      }

      ::slotted(.accordion-panel) {
        height: auto;
        padding: var(--accordion-panel-padding);
        background-color: var(--accordion-panel-bg);
        color: var(--accordion-panel-textColor);
        overflow: auto;
        margin: 0;
      }

      .accordion-title {
        background-color: var(--accordion-title-bg);
        color: var(--accordion-title-textColor);
        cursor: pointer;
        padding: var(--accordion-title-padding);
        outline: none;
        list-style: none;
        font-size: var(--accordion-title-fs);
        transition: 0.5s;
      }
    `;

    // accordion title params
    accTitle.textContent = this.title;
    accTitle.classList.add('accordion-title');

    // append accordion container
    accContainer.append(accTitle, accPanel);

    // shadow append
    shadowRoot.append(styles, accContainer);
  }
}

// create custom Element
customElements.define('neo-accordion', Accordion);
