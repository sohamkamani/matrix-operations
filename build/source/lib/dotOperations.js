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
  return function (matrix) {
    var self = this;
    if (!(0, _canAdd2.default)(self, matrix)) {
      throw new Error('Cannot perform operation : dimension mismatch');
    }
    var mat1 = self.value();
    var mat2 = matrix.value();
    var mat3 = mat1.map(function (row, i) {
      return row.map(function (elem, j) {
        return operation(elem, mat2[i][j]);
      });
    });
    return (0, _Matrix2.default)(mat3);
  };
};

module.exports = {
  add: dotOperation(add),
  subtract: dotOperation(subtract),
  multiply: dotOperation(multiply),
  divide: dotOperation(divide)
};