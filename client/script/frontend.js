'use strict';

window.onload = function () {
  document.querySelector('.decode-button').addEventListener('click', function () {
    const inputValues = {
      text: document.querySelector('#encrypted-text').value,
      shift: document.querySelector('#decode-shift').value,
    };
    const callback = function (xhrResponse) {
      domModify.clearInputField();
      if (JSON.parse(xhrResponse).status === 'error') {
        domModify.showDecodedMessage('Decoded message displayed here');
        window.alert(JSON.parse(xhrResponse).error);
      } else {
        domModify.showDecodedMessage(JSON.parse(xhrResponse).text);
      }
    };
    domModify.showDecodedMessage('Loading...');
    httpRequest.decodeText(inputValues, callback);
  });
};
