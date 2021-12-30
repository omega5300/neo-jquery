type ajax = {
  url: string;
  type?: string;
  data?: any;
  headers?: any;
  dataType: string;
  success: (param: any) => void;
  failed: (param: any) => void;
};

// dinamic styles
const styles: HTMLStyleElement = document.createElement('style');

styles.textContent = `
  .show {
    opacity: 1;
  }
  .hide {
    opacity: 0;
  }
  
  .show, .hide {
    transition: opacity 400ms;
  }
`;

document.head.appendChild(styles);

// create elements
const $createElement = (el: string) => document.createElement(el);

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
  return await fetch(url)
    .then(res => res.json())
    .then(data => callback(data));
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
  return await fetch(url, {
    method: type,
    body: data,
    headers,
  })
    .then(res => {
      switch (dataType) {
        case 'text':
          return res.text()

        case 'json':
          return res.json()

        // binary
        default:
          return res.blob()
      }
    })
    .then(result => success(result))
    .catch(error => failed(error));
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