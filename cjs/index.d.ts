declare type ajax = {
    url: string;
    type?: string;
    data?: any;
    headers?: any;
    dataType: string;
    success: (param: any) => void;
    failed: (param: any) => void;
};
declare const _default: {
    $body: HTMLElement;
    $selector: (el: string) => Element | null;
    $selectorAll: (el: string) => NodeListOf<Element>;
    $id: (el: string) => HTMLElement | null;
    $date: (date?: any) => Date;
    $getJSON: (url: string, callback: (param: any) => void) => Promise<void>;
    $ajax: ({ url, type, data, headers, dataType, success, failed }: ajax) => Promise<void>;
    $createElement: (el: string) => HTMLElement;
    $toast: (msg: string, classAlert: string, time: number) => void;
    fadeIn: (el: Element | HTMLElement) => void;
    fadeOut: (el: Element | HTMLElement) => void;
    hide: (el: any) => string;
    show: (el: any) => string;
};
export = _default;
