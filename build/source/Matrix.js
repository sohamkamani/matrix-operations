'use strict';

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _isMatrix = require('./validations/isMatrix');

var _isMatrix2 = _interopRequireDefault(_isMatrix);

var _dotOperations = require('./lib/dot-operations');

var _dotOperations2 = _interopRequireDefault(_dotOperations);

var _canAdd = require('./validations/canAdd');

var _canAdd2 = _interopRequireDefault(_canAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Matrix = function Matrix(arr) {
  if (!(0, _isMatrix2.default)(arr)) {
    throw new Error('Array is not a matrix');
  }

  var value = function value() {
    return arr;
  };
  var dimensions = {
    m: arr.length,
    n: arr[0].length
  };

  var coreObject = {
    value: value,
    dimensions: dimensions
  };

  var convertDotOperation = function convertDotOperation(operation) {
    return function (mat2) {
      if (!(0, _canAdd2.default)(coreObject, mat2)) {
        throw new Error('no');
      }
      return Matrix(operation(value(), mat2.value()));
    };
  };

  var matrixDotOperations = {};
  Object.keys(_dotOperations2.default).forEach(function (key) {
    matrixDotOperations[key] = convertDotOperation(_dotOperations2.default[key]);
  });

  return (0, _objectAssign2.default)(coreObject, matrixDotOperations);
};

module.exports = Matrix;