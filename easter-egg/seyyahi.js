class MelodieSeyyahi extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open'});
    
    const seyyahiStyles = document.createElement('style');
    const seyyahiContainer = document.createElement('figure');
    const seyyahiTitle = document.createElement('figcaption');
    const seyyahiImg = document.createElement('img');
    
    // styles
    seyyahiStyles.textContent = `   
      .img {
        display: block;
        position: relative;
        outline: 2px solid #000;
        outline-offset: -10px;
        border-radius: 15px;
      }
      
      .container {
        margin: 0;
        width: 400px;
      }

      .title {
        position: absolute;
        top: 165px;
        left: 30px;
        color: #fff;
        background-color: rgba(0, 0, 0, .5);
        padding: 8px 4px;
      }
    `;
    
    // container
    seyyahiContainer.classList.add('container')

    // elements
    seyyahiImg.src = 'https://images.unsplash.com/photo-1565701175719-5ef844931183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTMyMzY5Mw&ixlib=rb-1.2.1&q=80&w=400';
    seyyahiImg.alt = 'kaktus kardesim';
    seyyahiImg.classList.add('img')
    
    seyyahiTitle.textContent = 'melodie seyyahi SS ';
    seyyahiTitle.classList.add('title')
    
    
    seyyahiContainer.append(seyyahiImg, seyyahiTitle)
    
    shadowRoot.append(seyyahiStyles, seyyahiContainer)
  }
}

customElements.define('melodie-seyyahi', MelodieSeyyahi)