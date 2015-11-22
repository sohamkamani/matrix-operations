'use strict';
import {
  assert
}
from 'chai';
import Matrix from '../../source/Matrix';

describe('create matrix', function () {

  it('creates a matrix of given dimensions (zeros)', () => {
    assert.deepEqual(Matrix.zeros(2, 2).value(), [
      [0, 0],
      [0, 0]
    ]);
  });

  it('creates a matrix of given dimensions (ones)', () => {
    assert.deepEqual(Matrix.ones(2, 2).value(), [
      [1, 1],
      [1, 1]
    ]);
  });
});
