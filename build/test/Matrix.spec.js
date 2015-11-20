'use strict';

var _chai = require('chai');

var _Matrix = require('../source/Matrix');

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Matrix', function () {

  it('should throw an error for an invalid matrix', function () {
    (0, _chai.expect)(function () {
      return (0, _Matrix2.default)(null);
    }).to.throw(Error);
  });

  it('should return value of matrix', function () {
    _chai.assert.deepEqual((0, _Matrix2.default)([[1]]).value(), [[1]]);
  });

  it('should return correct dimensions', function () {
    var mat2x2 = [[1, 1], [1, 1]];
    var mat2x1 = [[1], [1]];
    _chai.assert.deepEqual((0, _Matrix2.default)(mat2x2).dimensions, { m: 2, n: 2 });
    _chai.assert.deepEqual((0, _Matrix2.default)(mat2x1).dimensions, { m: 2, n: 1 });
  });

  it('should add another matrix', function () {
    var mat1 = (0, _Matrix2.default)([[1], [1]]);
    var mat2 = (0, _Matrix2.default)([[1], [1]]);
    _chai.assert.deepEqual(mat1.add(mat2).value(), [[2], [2]]);
  });

  it('should subtract another matrix', function () {
    var mat1 = (0, _Matrix2.default)([[1], [1]]);
    var mat2 = (0, _Matrix2.default)([[1], [1]]);
    _chai.assert.deepEqual(mat1.subtract(mat2).value(), [[0], [0]]);
  });

  it('should dot multiply another matrix', function () {
    var mat1 = (0, _Matrix2.default)([[1], [1]]);
    var mat2 = (0, _Matrix2.default)([[1], [1]]);
    _chai.assert.deepEqual(mat1.multiply(mat2).value(), [[1], [1]]);
  });

  it('should dot divide another matrix', function () {
    var mat1 = (0, _Matrix2.default)([[1], [1]]);
    var mat2 = (0, _Matrix2.default)([[1], [1]]);
    _chai.assert.deepEqual(mat1.divide(mat2).value(), [[1], [1]]);
  });

  it('should throw error while adding matrix of wrong dimensions', function () {
    var mat1 = (0, _Matrix2.default)([[1], [1]]);
    var mat2 = (0, _Matrix2.default)([[1]]);
    (0, _chai.expect)(function () {
      return mat1.add(mat2);
    }).to.throw(Error);
  });
});