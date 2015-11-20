'use strict';
import {expect} from 'chai';
import Matrix from '../../source/Matrix';
import canAdd from '../../source/validations/canAdd';

describe('canAdd', function () {
  it('should return true if two matrices are same dimensions', () => {
    let mat1 = Matrix([
      [1],
      [2]
    ]);
    let mat2 = Matrix([
      [3],
      [4]
    ]);
    expect(canAdd(mat1, mat2))
      .to.equal(true);
  });

  it('should return false if two matrices are not same dimensions', () => {
    let mat1 = Matrix([
      [1],
      [2]
    ]);
    let mat2 = Matrix([
      [3, 5],
      [4, 6]
    ]);
    expect(canAdd(mat1, mat2))
      .to.equal(false);
  });
});
