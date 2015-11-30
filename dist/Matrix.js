'use strict';

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _isMatrix = require('./validations/isMatrix');

var _isMatrix2 = _interopRequireDefault(_isMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Matrix = function Matrix(arr) {
  if (!(this instanceof Matrix)) {
    return new Matrix(arr);
  }

  if (!(0, _isMatrix2.default)(arr)) {
    throw new Error('Array is not a matrix');
  }

  /*
  Building Core Matrix object
  */
  var value = function value() {
    return arr;
  };
  var dimensions = {
    m: arr.length,
    n: arr[0].length
  };

  var coreObject = {
    value: value,
    dimensions: dimensions,
    isMatrix: true
  };
  (0, _objectAssign2.default)(this, coreObject);
};

module.exports = Matrix;

var dotOperations = require('./lib/dot-operations');
var isSquare = require('./validations/isSquare');
var createArray = require('./lib/create');
var multiply = require('./lib/multiply');
var subMatrix = require('./lib/submatrix');

/*
Building exposed validations
*/
var validations = {
  isSquare: isSquare
};

/*
Matrix cross operations
*/
var crossOperations = {
  subMatrix: subMatrix,
  multiply: multiply
};
/*
Building Matrix object from various modules
*/
(0, _objectAssign2.default)(Matrix.prototype, dotOperations, validations, crossOperations);

/*
  Static methods
*/

Matrix.ones = function (m, n) {
  return Matrix(createArray({
    m: m, n: n
  }, 1));
};

Matrix.zeros = function (m, n) {
  return Matrix(createArray({
    m: m,
    n: n
  }, 0));
};