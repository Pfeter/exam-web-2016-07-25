'use strict';

const domModify = (function () {
  function clearInputField() {
    document.querySelector('#encrypted-text').value = '';
    document.querySelector('#decode-shift').value = '';
  }

  function showDecodedMessage(decodedMessage) {
    document.querySelector('.decoded-message').innerHTML = decodedMessage;
  }

  return {
    clearInputField: clearInputField,
    showDecodedMessage: showDecodedMessage,
  };
})();
