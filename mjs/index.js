// dinamic styles
const styles = document.createElement('style');
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
const $createElement = (el) => document.createElement(el);
// body
const $body = document.body;
// query selector
const $selector = (el) => document.querySelector(el);
// selector all
const $selectorAll = (el) => document.querySelectorAll(el);
// selector id
const $id = (el) => document.getElementById(el);
// date
const $date = (date = null) => new Date(date);
// ajax
const $getJSON = async (url, callback) => {
    const res = await fetch(url);
    callback(await res.json());
};
const $ajax = async ({ url, type, data, headers, dataType, success, failed }) => {
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
    }
    catch (err) {
        failed(err);
    }
};
// fade effects
const fadeIn = (el) => {
    el.classList.contains('hide')
        ? el.classList.replace('hide', 'show')
        : el.classList.add('show');
};
const fadeOut = (el) => {
    el.classList.contains('show')
        ? el.classList.replace('show', 'hide')
        : el.classList.add('hide');
};
// show and hidden elements
const hide = (el) => (el.style.display = 'none');
const show = (el) => (el.style.display = '');
const $toast = (msg, classAlert, time) => {
    const toast = $createElement('div');
    toast.textContent = msg;
    toast.classList.add(classAlert, 'show');
    $body.prepend(toast);
    setTimeout(() => {
        fadeOut(toast);
        $body.removeChild(toast);
    }, time);
};
// exports
export { $body, $selector, $selectorAll, $id, $date, $getJSON, $ajax, $createElement, $toast, fadeIn, fadeOut, hide, show, };
