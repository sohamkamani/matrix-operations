'use strict';

var _isMatrix = require('../../source/validations/isMatrix');

var _isMatrix2 = _interopRequireDefault(_isMatrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('isMatrix', function () {

  var correctMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  var arrayButNotMatrix = [[1, 2, 3], [4], [5, 6, 7]];
  var array1d = [1, 2, 3];
  var invalidCharMatrix = [[1, 2, 'a'], [3, 4, 5], [6, 7, 8]];
  it('should check if an array is a matrix', function () {
    expect((0, _isMatrix2.default)(correctMatrix)).to.equal(true);
  });
  it('should return false for asymmetric array', function () {
    expect((0, _isMatrix2.default)(arrayButNotMatrix)).to.equal(false);
  });
  it('should return false for 1D array', function () {
    expect((0, _isMatrix2.default)(array1d)).to.equal(false);
  });
  it('should return false for arrays which dont have numbers', function () {
    expect((0, _isMatrix2.default)(invalidCharMatrix)).to.equal(false);
  });
  it('should return false for null, undefined, and non arrays', function () {
    expect((0, _isMatrix2.default)(null)).to.equal(false);
    expect((0, _isMatrix2.default)(undefined)).to.equal(false);
    expect((0, _isMatrix2.default)(1)).to.equal(false);
    expect((0, _isMatrix2.default)('s')).to.equal(false);
    expect((0, _isMatrix2.default)({})).to.equal(false);
  });
});