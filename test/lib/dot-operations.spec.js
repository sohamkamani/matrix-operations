'use strict';
import {
  assert, expect
}
from 'chai';
import {
  add, subtract, dotMultiply, dotDivide
}
from '../../source/lib/dot-operations';

describe('dot operations', function () {
  let mat1 = [
    [1, 2],
    [3, 4]
  ];
  let mat2 = [
    [1, 1],
    [1, 1]
  ];
  let matInvalid = [
    [3],
    [5]
  ];

  it('can add two matrices', () => {
    assert.deepEqual(add(mat1, mat2), [
        [2, 3],
        [4, 5]
      ]);
  });

  it('can subtract two matrices', () => {
    assert.deepEqual(subtract(mat1, mat2), [
        [0, 1],
        [2, 3]
      ]);
  });

  it('can dot multiply two matrices', () => {
    assert.deepEqual(dotMultiply(mat1, mat2), [
        [1, 2],
        [3, 4]
      ]);
  });

  it('can dot divide two matrices', () => {
    assert.deepEqual(dotDivide(mat1, mat2), [
        [1, 2],
        [3, 4]
      ]);
  });
  it('throws error for invalid matrices', () => {
    expect(() =>divide.apply(mat1, [matInvalid])).to.throw(Error);
  });
});
