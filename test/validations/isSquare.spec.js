'use strict';
import Matrix from '../../source/Matrix';
import {expect} from 'chai';

describe('isSquare', function(){
  it('returns true if matrix is square', ()=>{
    let sqMatrix = Matrix([
      [1, 2],
      [3, 4]
    ]);
    expect(sqMatrix.isSquare()).to.equal(true);
  });

  it('returns false if matrix is not square', ()=>{
    let notSqMatrix = Matrix([[1,2,3]]);
    expect(notSqMatrix.isSquare()).to.equal(false);
  });
});
