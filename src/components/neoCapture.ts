class NeoCapture extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    // shadow root
    const shadowRoot = this.attachShadow({ mode: "closed" })
    const displayMediaOptions = {
      video: {
        displaySurface: "window"
      },
      audio: true
    }

    // elements
    const captureStyles = document.createElement("style")
    const captureElem = document.createElement("video")
    const toggleCapture = document.createElement("button")
    toggleCapture.textContent = 'start'
    
    captureStyles.textContent = `
    :host {
      width: var(--component-w, 640px);
      height: var(--component-h, 480px);
    }
    
    video {
      width: inherit;
      height: inherit;
    }
    
    button {
      background: none;
      border: none;
      outline: var(--component-outline, 1px solid #000);
      border-radius: 20px;
      cursor: pointer;
      width: inherit;
      height: 30px;
    }
    `

    // events
    toggleCapture.addEventListener('click', async () => {
      if (captureElem.paused) {
        captureElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
        captureElem.play()
        toggleCapture.textContent = 'stop'
      } else {
        captureElem.srcObject = null
        toggleCapture.textContent = 'start'
      }
    })

    shadowRoot.append(captureStyles, captureElem, toggleCapture)
  }
}

customElements.define("neo-capture", NeoCapture)
