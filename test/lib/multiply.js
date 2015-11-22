'use strict';
import Matrix from '../../source/Matrix';
import {
  assert
}
from 'chai';

describe('Matrix multiplication', function () {
  it('multiplies', () => {
    let m1 = Matrix([
      [1],
      [2],
      [3]
    ]);
    let m2 = Matrix([
      [1, 1, 1]
    ]);
    assert.deepEqual(m1.multiply(m2).value(), [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3]
    ]);
  });
});
