'use strict';

var _isMatrix = require('./validations/isMatrix');

var _isMatrix2 = _interopRequireDefault(_isMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (arr) {
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
  return {
    value: value,
    dimensions: dimensions
  };
};