'use strict';

const decrypter = (function () {
  function decodeText(encrypted) {
    let output = '';
    for (let i = 0; i < encrypted.text.length; i++) {
      const charNumb = encrypted.text[i].charCodeAt(0);
      if (encrypted.text[i].match(/[a-z]/)) {
        output += String.fromCharCode((charNumb - 97 - Number(encrypted.shift) + 26) % 26 + 97);
      } else if (encrypted.text[i].match(/[A-Z]/)) {
        output += String.fromCharCode((charNumb - 65 - Number(encrypted.shift) + 26) % 26 + 65);
      } else {
        output += encrypted.text[i];
      }
    }
    return output;
  }

  return {
    decodeText: decodeText,
  };
})();

module.exports = decrypter;
