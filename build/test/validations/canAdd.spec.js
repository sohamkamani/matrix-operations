'use strict';

var _chai = require('chai');

var _Matrix = require('../../source/Matrix');

var _Matrix2 = _interopRequireDefault(_Matrix);

var _canAdd = require('../../source/validations/canAdd');

var _canAdd2 = _interopRequireDefault(_canAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('canAdd', function () {
  it('should return true if two matrices are same dimensions', function () {
    var mat1 = (0, _Matrix2.default)([[1], [2]]);
    var mat2 = (0, _Matrix2.default)([[3], [4]]);
    (0, _chai.expect)((0, _canAdd2.default)(mat1, mat2)).to.equal(true);
  });

  it('should return false if two matrices are not same dimensions', function () {
    var mat1 = (0, _Matrix2.default)([[1], [2]]);
    var mat2 = (0, _Matrix2.default)([[3, 5], [4, 6]]);
    (0, _chai.expect)((0, _canAdd2.default)(mat1, mat2)).to.equal(false);
  });
});