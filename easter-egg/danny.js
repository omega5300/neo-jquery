const links = [
  {
    url: 'https://m.facebook.com/DannyAegyo/?locale2=es_LA',
    linkName: 'facebook',
    cssClass: 'facebook'
  },
  {
    url: 'https://twitter.com/dannyaegyo',
    linkName: 'twitter',
    cssClass: 'twitter'
  },
  {
    url: 'https://www.instagram.com/dannyaegyo/?hl=es',
    linkName: 'instagram',
    cssClass: 'instagram'
  },
  {
    url: 'http://tiktok.com/@dannyaegyo',
    linkName: 'tiktok',
    cssClass: 'tiktok'
  },
  {
    url: 'https://twitch.tv/dannyaegyo',
    linkName: 'twitch',
    cssClass: 'twitch'
  },
  {
    url: 'https://www.patreon.com/user?u=6560196&fan_landing=true',
    linkName: 'patreon',
    cssClass: 'patreon'
  },
  {
    url: 'https://www.paypal.com/paypalme/dannyaegyoo',
    linkName: 'paypal',
    cssClass: 'paypal'
  },
];

class DannyAegyo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // elements
    const internalStyles = document.createElement('style');
    const menu = document.createElement('nav');


    internalStyles.textContent = `
        .link {
          position: absolute;
          left: -80px;
          transition: 0.3s;
          padding: 15px;
          width: 100px;
          font-size: 20px;
          text-decoration: none;
          color: #fff;
          border-radius: 0 5px 5px 0;
        }
        
        .facebook {
          top: 20px;
          background-color: #3B5998;
        }
        
        .twitter {
          top: 80px;
          background-color: #1DA1F2;
        }
        
        .instagram {
          top: 140px;
          background-image: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
        }
        
        .tiktok {
          top: 200px;
          background-color: #000;
        }
        
        .twitch {
          top: 260px;
          background-color: #9146FF;
        }
        
        .patreon {
          top: 320px;
          background-color: #FF424D;
        }
        
        .paypal {
          top: 380px;
          background-image: linear-gradient(45deg, #003087, #009cde, #012169);
        }
        
        @media (hover: hover) {
          .link:hover {
            opacity: 0.5;
            left: 0;
          }
        }
      `;

    menu.classList.add('menu');

    links.forEach(({ url, linkName, cssClass }) => {
      const menuLink = document.createElement('a');

      menuLink.href = url;
      menuLink.target = '_blank';
      menuLink.rel = 'noreferrer';
      menuLink.classList.add('link', cssClass);
      menuLink.textContent = linkName;
      menu.append(menuLink);
    });

    shadowRoot.append(internalStyles, menu);
  }
}

customElements.define('danny-redes', DannyAegyo);