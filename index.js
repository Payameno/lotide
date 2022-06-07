// index.js
const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const map = require("./map"); //files needs attention from here(dry and make tests)
const takeUntil = require("./takeUntil");
const without = require("./without");
const letterPositions = require("./letterPositions");
const findKeyByValue = require("./findKeyByValue");
const findKey = require("./findKey");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const assertObjectsEqual = require("./assertObjectsEqual");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");

module.exports = {
  head,
  tail,
  middle,
  map,
  takeUntil,
  without,
  letterPositions,
  findKeyByValue,
  findKey,
  eqArrays,
  eqObjects,
  countOnly,
  countLetters,
  assertObjectsEqual,
  assertEqual,
  assertArraysEqual,
};
