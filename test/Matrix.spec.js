'use strict';
import {expect, assert} from 'chai';
import Matrix from '../source/Matrix';

describe('Matrix', function(){

  it('should throw an error for an invalid matrix', ()=>{
    expect(()=> Matrix(null)).to.throw(Error);
  });

  it('should return value of matrix', ()=>{
    assert.deepEqual(Matrix([[1]]).value(), [[1]]);
  });

  it('should return correct dimensions', ()=>{
    let mat2x2 = [[1,1],[1,1]];
    let mat2x1 = [[1],[1]];
    assert.deepEqual(Matrix(mat2x2).dimensions, {m: 2, n: 2});
    assert.deepEqual(Matrix(mat2x1).dimensions, {m: 2, n: 1});
  });
});
