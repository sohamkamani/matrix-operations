'use strict';

var _chai = require('chai');

var _Matrix = require('../../source/Matrix');

var _Matrix2 = _interopRequireDefault(_Matrix);

var _dotOperations = require('../../source/lib/dotOperations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('dot operations', function () {
  var mat1 = (0, _Matrix2.default)([[1, 2], [3, 4]]);
  var mat2 = (0, _Matrix2.default)([[1, 1], [1, 1]]);
  var matInvalid = (0, _Matrix2.default)([[3], [5]]);

  it('can add two matrices', function () {
    _chai.assert.deepEqual(_dotOperations.add.apply(mat1, [mat2]).value(), [[2, 3], [4, 5]]);
  });

  it('can subtract two matrices', function () {
    _chai.assert.deepEqual(_dotOperations.subtract.apply(mat1, [mat2]).value(), [[0, 1], [2, 3]]);
  });

  it('can dot multiply two matrices', function () {
    _chai.assert.deepEqual(_dotOperations.multiply.apply(mat1, [mat2]).value(), [[1, 2], [3, 4]]);
  });

  it('can dot divide two matrices', function () {
    _chai.assert.deepEqual(_dotOperations.divide.apply(mat1, [mat2]).value(), [[1, 2], [3, 4]]);
  });
  it('throws error for invalid matrices', function () {
    (0, _chai.expect)(function () {
      return _dotOperations.divide.apply(mat1, [matInvalid]);
    }).to.throw(Error);
  });
});