declare class Accordion extends HTMLElement {
    title: string;
    constructor();
    static get observedAttribute(): string[];
    connectedCallback(): void;
}
