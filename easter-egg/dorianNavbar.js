const links = [
  {
    url: 'https://cursos.doriandesings.com/',
    cssClass: 'fa-globe'
  },
  {
    url: 'https://www.facebook.com/yoaprendocondorian/',
    cssClass: 'fa-facebook'
  },
  {
    url: 'https://twitter.com/DorianDesings',
    cssClass: 'fa-twitter'
  },
  {
    url: 'https://instagram.com/dorian_desings',
    cssClass: 'fa-instagram'
  },
  {
    url: 'https://www.youtube.com/c/DorianDesings',
    cssClass: 'fa-youtube'
  },
  {
    url: 'https://www.twitch.tv/doriandesings',
    cssClass: 'fa-twitch'
  },
  {
    url: 'https://www.patreon.com/DorianDesings',
    cssClass: 'fa-patreon'
  },
];

class DorianDesings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // elements
    const fontAwesome = document.createElement('link');
    const internalStyles = document.createElement('style');
    const navbar = document.createElement('nav');
    const menu = document.createElement('ul');


    internalStyles.textContent = `
      .menu {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: start;
        align-items: auto;
        align-content: start; 
        list-style: none;
      }
      
      .menu-item {
        display: block;
        padding: 0;
        flex: 0 0 auto;
        margin: 4px;
      }
      
      .fa-solid, .fa-brands {
        padding: 20px;
        width: 50px;
        font-size: 30px;
        text-align: center;
        text-decoration: none;
      }
      
      .fa-globe, .fa-facebook, .fa-twitter, .fa-instagram, .fa-youtube, .fa-twitch, .fa-patreon {
      color: #fff;
      }
      
      .fa-globe {
        background-color: #000;
      }
      .fa-facebook {
        background-color: #3B5998;
      }
      .fa-twitter {
        background-color: #1DA1F2;
      }
      .fa-instagram {
        background-image: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
      }
      .fa-youtube {
        background-color: #f00;
      }
      .fa-twitch {
        background-color: #9146FF;
      }
      .fa-patreon {
        background-color: #FF424D;
      }
      
      @media (hover: hover) {
        .fa-solid:hover, .fa-brands:hover {
          opacity: 0.5;
        }
      }
    `;

    menu.classList.add('menu');

    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

    links.forEach((link, i) => {
      const menuItem = document.createElement('li');
      const menuItemLink = document.createElement('a');

      menuItem.classList.add('menu-item')

      const mainIconClass = i === 0 ? 'fa-solid' : 'fa-brands';

      menuItemLink.href = link.url;
      menuItemLink.target = '_blank';
      menuItemLink.rel = 'noreferrer';
      menuItemLink.classList.add(mainIconClass, link.cssClass);

      menuItem.append(menuItemLink);
      menu.append(menuItem);
    });

    shadowRoot.append(fontAwesome, internalStyles, navbar, menu);
  }
}

customElements.define('dorian-desings', DorianDesings);