'use strict';

var createRow = function createRow(size, n) {
  var row = [];
  var i = 0;
  for (i = 0; i < size; i++) {
    row.push(n);
  }
  return row;
};

var createArray = function createArray(dimensions, n) {
  var arr = [];
  var i = 0;
  while (i < dimensions.m) {
    arr.push(createRow(dimensions.n, n));
    i += 1;
  }
  return arr;
};

module.exports = createArray;