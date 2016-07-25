'use strict';

const httpRequest = (function () {
  const url = 'http://localhost:3000/decode';

  function xhrRequest(method, inputUrl, callback, inputValue) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(xhr.response);
    };
    xhr.open(method, inputUrl);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(inputValue && JSON.stringify(inputValue));
  }

  function decodeText(inputValue, callback) {
    xhrRequest('POST', url, callback, inputValue);
  }

  return {
    decodeText: decodeText,
  };
})();
