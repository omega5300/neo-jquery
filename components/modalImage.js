class ModalImg extends HTMLElement {
    constructor() {
        super();
        this.url;
        this.alt;
    }
    static get observedAttributes() {
        return ['url', 'alt'];
    }
    attributeChangedCallback(nameAttr, oldValue, newValue) {
        switch (nameAttr) {
            case 'url':
                this.url = newValue;
                break;
            case 'alt':
                this.alt = newValue;
                break;
        }
    }
    connectedCallback() {
        // shadow root
        const shadowRoot = this.attachShadow({ mode: "open" });
        // elements
        const styles = document.createElement('style');
        const modal = document.createElement('dialog');
        const imgButton = document.createElement('img');
        const imgModal = document.createElement('img');
        const closeButton = document.createElement('span');
        const caption = document.createElement('p');
        // styles
        styles.textContent = `
        .myImg {
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
          width:100%;
          max-width:300px;
        }
        
        .modal {
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.9);
        }
        
        .modal-content {
          margin: auto;
          display: block;
          width: 80%;
          max-width: 700px;
          text-align: center;
          color: #ccc;
          
        }
        
        .caption {
          margin: auto;
          width: 80%;
          max-width: 700px;
          text-align: center;
          color: #ccc;
          padding-block: 10px;
          height: 150px;
        }
        
        .modal-content, .caption {
          animation-name: zoom;
          animation-duration: 0.6s;
        }
        
        .close {
          position: absolute;
          top: 15px;
          right: 35px;
          color: #f1f1f1;
          font-size: 40px;
          font-weight: bold;
          transition: 0.3s;
        }
        
        @keyframes zoom {
          from { transform:scale(0) } 
          to { transform:scale(1) }
        }
        
        @media(hover: hover) {
          .myImg:hover {
            opacity: 0.7;
          }
          
          .close:hover {
            color: #bbb;
            cursor: pointer;
          }
        }
        
        @media only screen and (max-width: 700px) {
          .modal-content {
            width: 100%;
          }
        }
      `;
        // add classes
        imgButton.classList.add('myImg');
        modal.classList.add('myModal', 'modal');
        closeButton.classList.add('close');
        imgModal.classList.add('modal-content', 'img');
        caption.classList.add('caption');
        // img
        [imgButton.src, imgModal.src] = [this.url, this.url];
        [imgButton.alt, imgModal.alt] = [this.alt, this.alt];
        closeButton.innerHTML = '&times;';
        // append
        modal.append(closeButton, imgModal, caption);
        shadowRoot.append(styles, imgButton, modal);
        // event
        const modalOpts = shadowRoot.querySelector('.myModal');
        const img = shadowRoot.querySelector('.myImg');
        const title = shadowRoot.querySelector('.caption');
        const close = shadowRoot.querySelector('.close');
        img.addEventListener('click', () => {
            modalOpts.showModal();
            title.textContent = img.alt;
        });
        close.addEventListener('click', () => {
            modalOpts.close();
        });
    }
}
customElements.define("modal-image", ModalImg);
