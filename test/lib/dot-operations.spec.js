'use strict';
import {
  assert, expect
}
from 'chai';
import {
  add, subtract, dotMultiply, dotDivide
}
from '../../source/lib/dot-operations';
import Matrix from '../../source/Matrix';

describe('dot operations', function () {
  let mat1 = Matrix([
    [1, 2],
    [3, 4]
  ]);
  let mat2 = Matrix([
    [1, 1],
    [1, 1]
  ]);
  let matInvalid = Matrix([
    [3],
    [5]
  ]);

  it('can add two matrices', () => {
    assert.deepEqual(add.call(mat1, mat2).value(), [
        [2, 3],
        [4, 5]
      ]);
  });

  it('can subtract two matrices', () => {
    assert.deepEqual(subtract.call(mat1, mat2).value(), [
        [0, 1],
        [2, 3]
      ]);
  });

  it('can dot multiply two matrices', () => {
    assert.deepEqual(dotMultiply.call(mat1, mat2).value(), [
        [1, 2],
        [3, 4]
      ]);
  });

  it('can dot divide two matrices', () => {
    assert.deepEqual(dotDivide.call(mat1, mat2).value(), [
        [1, 2],
        [3, 4]
      ]);
  });
  it('throws error for invalid matrices', () => {
    expect(() =>dotDivide.apply(mat1, [matInvalid])).to.throw(Error);
  });
});
