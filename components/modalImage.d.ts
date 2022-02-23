declare class ModalImg extends HTMLElement {
    url: any | string;
    alt: any | string;
    constructor();
    static get observedAttributes(): any[];
    attributeChangedCallback(nameAttr: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
}
