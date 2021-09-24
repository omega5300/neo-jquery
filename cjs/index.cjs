// dinamic styles
const styles = document.createElement('style');

styles.textContent = `
.show {
  opacity: 1;
  transition: opacity 400ms;
}
.hide {
  opacity: 0;
  transition: opacity 400ms;
}
`;

document.head.appendChild(styles);

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
  el.classList.add('show');
  el.classList.remove('hide');
};

const fadeOut = el => {
  el.classList.add('hide');
  el.classList.remove('add');
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
  fadeIn,
  fadeOut,
  hide,
  show
}
