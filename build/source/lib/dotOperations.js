'use strict';

var add = function add(a, b) {
  return a + b;
};
var subtract = function subtract(a, b) {
  return a - b;
};
var multiply = function multiply(a, b) {
  return a * b;
};
var divide = function divide(a, b) {
  return a / b;
};

var dotOperation = function dotOperation(operation) {
  return function (mat1, mat2) {
    var mat3 = mat1.map(function (row, i) {
      return row.map(function (elem, j) {
        return operation(elem, mat2[i][j]);
      });
    });
    return mat3;
  };
};

module.exports = {
  add: dotOperation(add),
  subtract: dotOperation(subtract),
  multiply: dotOperation(multiply),
  divide: dotOperation(divide)
};