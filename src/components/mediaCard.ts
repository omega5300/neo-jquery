class MediaCard extends HTMLElement {
	image!: string;
	name!: string;
	description!: string;

	constructor() {
		super();
		this.image;
		this.name;
		this.description;
	}

	static get observedAttributes(): string[] {
	    return ["image", "name", "description"];
	}

	attributeChangedCallback(nameAttr: string, oldValue: string, newValue: string) {
		switch (nameAttr) {
			case "image":
				this.image = newValue;
				break;
			case "name":
				this.name = newValue;
				break;
			case "description":			
				this.description = newValue;
				break;
		}
	}

	connectedCallback() {
		// shadow root
		const shadowRoot = this.attachShadow({ mode: "open" });

		// slots
		const keyword = document.createElement("slot");

		// elements
		const styles = document.createElement("style");
		const card = document.createElement("section");
		const title = document.createElement("h2");
		const desc = document.createElement("p");
		const img = document.createElement("img");
		const keywords = document.createElement("ul");

		// add class
		card.classList.add("item");
		title.classList.add("title");
		desc.classList.add("description");
		img.classList.add("image");
		keywords.classList.add("keywords");

		// add params
		title.textContent = this.name;
		desc.textContent = this.description;
		img.src = this.image;
		img.alt = this.name;

		// styles
		styles.textContent = `
			:host {
				box-sizing: border-box;
				font-family: var(--font-body);
				font-weight: 400;
				font-size: 100%;
				line-height: 1.5;
				color: #f0f0f0;
			}

			::slotted(.keyword) {
				font-style: italic;
				opacity: 0.5;
			}

			::slotted(.keyword a) {
				font-style: italic;
				color: #fff;
				text-decoration: none;
			}

			::slotted(.keyword)::before {
				content: "#";
			}

			.item {
				margin: 0.5rem;
				width: 20rem;
				padding: 0.4rem 1rem 0.75rem;
				background-color: #222;
			}

			.title {
				font-family: var(--font-title);
				font-size: 2rem;
				margin-left: -0.35rem;
				opacity: 0.5;
				text-transform: capitalize;
			}

			.image {
				width: 100%;
				margin: 0.8rem 0 0.7rem 0;
				transition: all 0.25s ease-in-out;
				filter: saturate(0%);
			}

			.keywords {
				display: flex;
				gap: 8px;
				font-style: italic;
				list-style: none;
				margin: 0;
				padding: 0;
			}

			@media(hover: hover) {
				.item:hover {
					cursor: pointer;
				}

				.item:hover .image {
					background-size: 105% auto;
					filter: saturate(100%);
				}

				::slotted(.keyword:hover) {
					opacity: 1;
					text-decoration: underline;
				}
			}
		`

		// append
		keywords.append(keyword);
		card.append(title, desc, img, keywords);
		shadowRoot.append(styles, card);
	}
}

customElements.define("media-card", MediaCard);
