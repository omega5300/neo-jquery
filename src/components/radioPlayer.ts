class RadioPlayer extends HTMLElement {
  [s: string]: any;

  src!: string;

  constructor() {
    super();
    this.src;
  }

  // time function
  radioTime(time: number): string {
    // round time
    const roundTime = Math.round(time);

    // minutes
    const min = Math.floor(roundTime / 60);
    const minMusic = min > 9 ? min : `0${min}`;

    // seconds
    const sec = roundTime % 60;
    const secMusic = sec > 9 ? sec : `0${sec}`;

    // time
    return `${minMusic}:${secMusic}`;
  }

  static get observedAttributes(): string[] {
    return ['src'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    this[name] = newValue;
  }

  connectedCallback() {
    // shadow root
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // elements
    const styles = document.createElement('style');
    const audio = document.createElement('audio');
    const audioContainer = document.createElement('section');
    const audioButton = document.createElement('button');
    const audioVolume = document.createElement('input');
    const audioTimer = document.createElement('span');

    // styles
    styles.textContent = `
      :host {
        --radio-color: #222;
        --radio-outline: 1px solid #000;
        --radio-btn-size: 1em;
      }
      
      .radio-container {
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: fit-content;
        padding: 0.8rem;
        outline: var(--radio-outline);
        border-radius: 20px;
      }

      .radio-volume, .radio-button {
        all: unset;
        cursor: pointer;
      }

      .radio-volume {
        accent-color: var(--radio-color);
        /* equivalent rgba(0, 0, 0, 0.2) */
        background-color: rgb(0 0 0 / 0.2);
        border-radius: 20px;
        height: 1vh;
        max-width: 100%;
      }
      
      .radio-button, .radio-timer {
        color: var(--radio-color);
      }

      .radio-button {
        font-size: var(--radio-btn-size);
      }
      
      .radio-timer {
        font-weight: bolder;
      }
    `;

    // container
    audioContainer.classList.add('radio-container');

    // audio init
    audio.src = this.src;
    audio.crossOrigin = '*';

    // audio volume
    audioVolume.classList.add('radio-volume');
    audioVolume.type = 'range';
    audioVolume.min = '0'
    audioVolume.max = '100'
    
    // default volume
    audio.volume = audioVolume.valueAsNumber / 100

    // audio timer
    audioTimer.textContent = this.radioTime(audio.duration || 0);
    audioTimer.classList.add('radio-timer');

    //audio button
    audioButton.classList.add('radio-button');
    audioButton.innerHTML = '&#9654;';

    // events
    audio.addEventListener('timeupdate', () => {
      audioTimer.textContent = this.radioTime(audio.currentTime);
    })

    audioVolume.addEventListener('change', (e) => {
      audio.volume = (e.target as HTMLInputElement).valueAsNumber / 100
    })

    audioButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();

        audioButton.innerHTML = '&#9724;';
      } else {
        audio.pause();
        audio.load();

        audioButton.innerHTML = '&#9654;';
      }
    })

    // container append
    audioContainer.append(audioButton, audioTimer, audioVolume);

    // append elements
    shadowRoot.append(styles, audio, audioContainer);
  }

}

customElements.define('neo-radio-player', RadioPlayer)
