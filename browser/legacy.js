// dinamic styles
var styles = document.createElement('style');

styles.textContent = "\n.show {\n  opacity: 1;\n}\n.hide {\n  opacity: 0;\n}\n.show, .hide {\n  transition: opacity 400ms;\n}\n";

document.head.appendChild(styles);

// xhr
var req = new XMLHttpRequest();

// neo-jquery methods
var $ = {
  body: document.body,
  createElement: function (el) {
    return document.createElement(el);
  },
  id: function (el) {
    return document.getElementById(el);
  },
  selector: function (el) {
    return document.querySelector(el);
  },
  selctorAll: function (el) {
    return document.querySelector(el);
  },
  class: function (el) {
    return document.getElementsByClassName(el);
  },
  name: function (el) {
    return document.getElementsByName(el);
  },
  date: function (date) {
    date = null || date
    return new Date(date)
  },
  getJSON: function (url, callback) {
    req.open('GET', url, true);

    req.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        callback(this.responseText);
      } else {
        callback('not found');
      }
    }

    req.onerror = function (err) {
      callback(err);
    };

    req.send();
  },
  ajax: function (ajaxParams) {
    req.open(ajaxParams.type, ajaxParams.url, true);

    if (ajaxParams.type === "POST" || ajaxParams.type === "post") {
      req.setRequestHeader(ajaxParams.headers);
    } else {
      req.onload = function () {
        if (this.status >= 200 && this.status < 400) {
          req.onreadystatechange = this.getResponseHeader('content-type');
          
          var typeResult = this.getResponseHeader('content-type').indexOf('application/json') === 0;
          
          typeResult ? ajaxParams.data(JSON.parse(this.responseText)) : ajaxParams.data(this.responseText);
        } else {
          ajaxParams.data("not found");
        }
      }
    }

    req.onerror = function (err) {
      ajaxParams.error(err);
    };

    req.send(ajaxParams.data);
  },
  fadeIn: function (el) {
    el.classList.add('show');
    el.classList.remove('hide');
  },
  fadeOut: function (el) {
    el.classList.add('hide');
    el.classList.remove('show');
  },
  show: function (el) {
    el.style.display = 'none';
  },
  hide: function (el) {
    el.style.display = '';
  },
};