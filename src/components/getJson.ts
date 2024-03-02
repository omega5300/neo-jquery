class NeoGetJson extends HTMLElement {
	[key: string]: any;

	spaces!: number;
	url!: string;

	constructor() {
		super();

		this.url;
		this.spaces;
	}

	static get observedAttributes(): string[] {
		return ['url', 'spaces'];
	}

	attributeChangedCallback(name: string, oldValue: any, newValue: any) {
		switch(name) {
			case 'url':
				this.url = newValue;
				break;
			case 'spaces':
			this.spaces = Number(newValue);
			break;
		}
	}

	async connectedCallback() {
		// shadow root
		const shadowRoot = this.attachShadow({ mode: 'closed'});

		// elements
		const code = document.createElement('pre');
		const styles = document.createElement('style');

		// styles
		styles.textContent = `pre {
			background-color: var(--bgc-json, #000);
			color: var(--txt-color, #fff);
			width: var(--width, auto);
			height: var(--height, auto);
			overflow: auto;
		}`;

		try {
			const data = await (await fetch(this.url)).json();
			code.textContent = JSON.stringify(data, null, this.spaces);
		} catch(err) {
			code.textContent = (err as Error).message;
		}

		shadowRoot.append(styles, code);
	}
}

customElements.define('neo-get-json', NeoGetJson);
