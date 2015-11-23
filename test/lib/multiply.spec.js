'use strict';
import Matrix from '../../source/Matrix';
import {
  assert, expect
}
from 'chai';

describe('Matrix multiplication', function () {
  let m1 = Matrix([
    [1],
    [2],
    [3]
  ]);
  let m2 = Matrix([
    [1, 1, 1]
  ]);
  let m3 = Matrix([[5],[3]]);
  it('multiplies', () => {
    assert.deepEqual(m1.multiply(m2).value(), [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3]
    ]);
  });

  it('throws error if matrices cannot be multiplied', ()=>{
    expect(()=>m1.multiply(m3)).to.throw(Error);
  });
});
