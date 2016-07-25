'use strict';

const tape = require('tape');

const decrypter = require('./decrypter');

tape('one "d" character decode with 0 shift to "d"', function (t) {
  const inputText = decrypter.decodeText({
    shift: 0,
    text: 'd',
  });
  const expectedText = 'd';
  t.equal(inputText, expectedText);
  t.end();
});

tape('one lowercase "d" character decode to "a"', function (t) {
  const inputText = decrypter.decodeText({
    shift: 3,
    text: 'd',
  });
  const expectedText = 'a';
  t.equal(inputText, expectedText);
  t.end();
});

tape('one uppercase "D" character decode to "A"', function (t) {
  const inputText = decrypter.decodeText({
    shift: 3,
    text: 'D',
  });
  const expectedText = 'A';
  t.equal(inputText, expectedText);
  t.end();
});

tape('one number "4" as string decode to "4"', function (t) {
  const inputText = decrypter.decodeText({
    shift: 3,
    text: '4',
  });
  const expectedText = '4';
  t.equal(inputText, expectedText);
  t.end();
});

tape('some mixed "de4FG!" character decode to "ab4CD!"', function (t) {
  const inputText = decrypter.decodeText({
    shift: 3,
    text: 'de4 FG!',
  });
  const expectedText = 'ab4 CD!';
  t.equal(inputText, expectedText);
  t.end();
});

tape('lowercase "a" character decode with turnround to "x"', function (t) {
  const inputText = decrypter.decodeText({
    shift: 3,
    text: 'a',
  });
  const expectedText = 'x';
  t.equal(inputText, expectedText);
  t.end();
});

tape('lowercase "x" character decode with minus shift turnaround to "a"', function (t) {
  const inputText = decrypter.decodeText({
    shift: -3,
    text: 'x',
  });
  const expectedText = 'a';
  t.equal(inputText, expectedText);
  t.end();
});

tape('uppercase "A" character character decode with turnround to "X"', function (t) {
  const inputText = decrypter.decodeText({
    shift: 3,
    text: 'A',
  });
  const expectedText = 'X';
  t.equal(inputText, expectedText);
  t.end();
});

tape('uppercase "X" character decode with minus shift turnaround to "A"', function (t) {
  const inputText = decrypter.decodeText({
    shift: -3,
    text: 'X',
  });
  const expectedText = 'A';
  t.equal(inputText, expectedText);
  t.end();
});
