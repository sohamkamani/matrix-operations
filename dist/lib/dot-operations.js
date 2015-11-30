'use strict';

var _Matrix = require('../Matrix');

var _Matrix2 = _interopRequireDefault(_Matrix);

var _canAdd = require('../validations/canAdd');

var _canAdd2 = _interopRequireDefault(_canAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var dotOperations = {
  add: dotOperation(add),
  subtract: dotOperation(subtract),
  dotMultiply: dotOperation(multiply),
  dotDivide: dotOperation(divide)
};
// let Matrix = require('../Matrix');

var convertDotOperation = function convertDotOperation(operation) {
  return function (mat2) {
    if (!(0, _canAdd2.default)(this, mat2)) {
      throw new Error('no');
    }
    return new _Matrix2.default(operation(this.value(), mat2.value()));
  };
};

var matrixDotOperations = {};
Object.keys(dotOperations).forEach(function (key) {
  matrixDotOperations[key] = convertDotOperation(dotOperations[key]);
});

module.exports = matrixDotOperations;