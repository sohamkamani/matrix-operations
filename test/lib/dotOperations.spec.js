'use strict';
import {
  assert, expect
}
from 'chai';
import {
  add, subtract, multiply, divide
}
from '../../source/lib/dotOperations';

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
    assert.deepEqual(multiply(mat1, mat2), [
        [1, 2],
        [3, 4]
      ]);
  });

  it('can dot divide two matrices', () => {
    assert.deepEqual(divide(mat1, mat2), [
        [1, 2],
        [3, 4]
      ]);
  });
  it('throws error for invalid matrices', () => {
    expect(() =>divide.apply(mat1, [matInvalid])).to.throw(Error);
  });
});
