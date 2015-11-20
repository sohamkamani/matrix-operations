'use strict';

var _chai = require('chai');

var _dotOperations = require('../../source/lib/dotOperations');

describe('dot operations', function () {
  var mat1 = [[1, 2], [3, 4]];
  var mat2 = [[1, 1], [1, 1]];
  var matInvalid = [[3], [5]];

  it('can add two matrices', function () {
    _chai.assert.deepEqual((0, _dotOperations.add)(mat1, mat2), [[2, 3], [4, 5]]);
  });

  it('can subtract two matrices', function () {
    _chai.assert.deepEqual((0, _dotOperations.subtract)(mat1, mat2), [[0, 1], [2, 3]]);
  });

  it('can dot multiply two matrices', function () {
    _chai.assert.deepEqual((0, _dotOperations.multiply)(mat1, mat2), [[1, 2], [3, 4]]);
  });

  it('can dot divide two matrices', function () {
    _chai.assert.deepEqual((0, _dotOperations.divide)(mat1, mat2), [[1, 2], [3, 4]]);
  });
  it('throws error for invalid matrices', function () {
    (0, _chai.expect)(function () {
      return _dotOperations.divide.apply(mat1, [matInvalid]);
    }).to.throw(Error);
  });
});