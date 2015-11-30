'use strict';

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _Matrix = require('../Matrix');

var _Matrix2 = _interopRequireDefault(_Matrix);

var _canMultiply = require('../validations/canMultiply');

var _canMultiply2 = _interopRequireDefault(_canMultiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMulValue = function getMulValue(args) {
  var matrix1 = args.matrix1;
  var matrix2 = args.matrix2;
  var i = args.i;
  var j = args.j;
  var n = args.n;

  var sum = 0;
  for (var counter = 0; counter < n; counter++) {
    sum += matrix1[i][counter] * matrix2[counter][j];
  }
  return sum;
};

var multiply = function multiply(mat2) {
  var matrix1 = this.value();
  var matrix2 = mat2.value();

  var m = this.dimensions.m;
  var n = this.dimensions.n;
  var p = mat2.dimensions.n;

  var returnedArray = (0, _create2.default)({
    m: m,
    n: p
  }, 0);

  return returnedArray.map(function (row, i) {
    return row.map(function (elem, j) {
      return getMulValue({
        matrix1: matrix1, matrix2: matrix2, i: i, j: j, n: n
      });
    });
  });
};

module.exports = function (mat2) {
  if (!(0, _canMultiply2.default)(this, mat2)) {
    throw new Error('Cannot multiply matrices : dimension mismatch');
  }
  var result = multiply.call(this, mat2);
  return (0, _Matrix2.default)(result);
};