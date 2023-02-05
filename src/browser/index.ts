type ajax = {
  url: string;
  type?: string;
  data?: any;
  headers?: any;
  dataType: 'text' | 'json' | 'blob';
  success: (param: any) => void;
  failed: (param: any) => void;
};

// dinamic styles
const styles: HTMLStyleElement = document.createElement('style');

styles.textContent = `
  .show, .hide {
    transition: opacity 400ms;
  }
  
  .show {
    opacity: 1;
  }
  
  .hide {
    opacity: 0;
  }
`;

document.head.appendChild(styles);

// create elements
const $createElement = (el: string) => document.createElement(el);

// root 
const $root: HTMLElement = document.documentElement;

// body
const $body: HTMLElement = document.body;

// query selector
const $selector = (el: string) => document.querySelector(el);

// selector all
const $selectorAll = (el: string) => document.querySelectorAll(el);

// selector id
const $id = (el: string) => document.getElementById(el);

// date
const $date = (date: null | any = null) => new Date(date)

// ajax
const $getJSON = async (url: string, callback: (param: any) => void) => {
  const res = await fetch(url);

  callback(await res.json())
};

const $ajax = async ({
  url,
  type,
  data,
  headers,
  dataType,
  success,
  failed
}: ajax) => {
  try {
    const res = await fetch(url, {
      method: type,
      body: data,
      headers,
    });

    switch (dataType) {
      case 'text':
        success(await res.text());
        break;
      case 'json':
        success(await res.json());
        break;
      default:
        success(await res.blob());
        break;
    }
  } catch (err) {
    failed(err);
  }
};

// fade effects
const fadeIn = (el: HTMLElement | Element) => {
  el.classList.contains('hide')
    ? el.classList.replace('hide', 'show')
    : el.classList.add('show');
};

const fadeOut = (el: HTMLElement | Element) => {
  el.classList.contains('show')
    ? el.classList.replace('show', 'hide')
    : el.classList.add('hide');
};

// show and hidden elements
const hide = (el: any) => (el.style.display = 'none');

const show = (el: any) => (el.style.display = '');

const $toast = (msg: string, classAlert: string, time: number) => {
  const toast = $createElement('div');
  toast.textContent = msg;
  toast.classList.add(classAlert, 'show');
  $body.prepend(toast);

  setTimeout(() => {
    fadeOut(toast);
    $body.removeChild(toast);
  }, time);
};
