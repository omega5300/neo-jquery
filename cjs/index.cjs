// dinamic styles
const styles = document.createElement('style');

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
const $createElement = (el) => document.createElement(el);

// ready
const $ready = (callback) => document.readyState !== 'loading' 
  ? callback() 
  : document.addEventListener('DOMContentLoader', callback);

// body
const $body = document.body;

// query selector
const $selector = el => document.querySelector(el);

// selector all
const $selectorAll = el => document.querySelectorAll(el);

// selector id
const $id = el => document.getElementById(el);

// date
const $date = new Date();

// ajax
const $getJSON = async (url, callback) => {
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
}) => {
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
const fadeIn = el => {
  el.classList.contains('hide')
    ? el.classList.replace('hide', 'show')
    : el.classList.add('show');
};

const fadeOut = el => {
  el.classList.contains('show')
    ? el.classList.replace('show', 'hide')
    : el.classList.add('hide');
};

// show and hidden elements
const hide = el => (el.style.display = 'none');

const show = el => (el.style.display = '');

// exports
module.exports = {
  $body,
  $selector,
  $selectorAll,
  $id,
  $date,
  $getJSON,
  $ajax,
  $ready,
  $createElement,
  fadeIn,
  fadeOut,
  hide,
  show
}
