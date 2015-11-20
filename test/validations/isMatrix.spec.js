'use strict';

import isMatrix from '../../source/validations/isMatrix';
let expect = require('chai').expect;

describe('isMatrix', function(){

  let correctMatrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  let arrayButNotMatrix = [
    [1,2,3],
    [4],
    [5,6,7]
  ];
  let array1d = [1,2,3];
  let invalidCharMatrix = [
    [1,2,'a'],
    [3,4,5],
    [6,7,8]
  ];
  it('should check if an array is a matrix', ()=>{
    expect(isMatrix(correctMatrix)).to.equal(true);
  });
  it('should return false for asymmetric array', ()=>{
    expect(isMatrix(arrayButNotMatrix)).to.equal(false);
  });
  it('should return false for 1D array', ()=>{
    expect(isMatrix(array1d)).to.equal(false);
  });
  it('should return false for arrays which dont have numbers', ()=>{
    expect(isMatrix(invalidCharMatrix)).to.equal(false);
  });
  it('should return false for null, undefined, and non arrays', ()=>{
    expect(isMatrix(null)).to.equal(false);
    expect(isMatrix(undefined)).to.equal(false);
    expect(isMatrix(1)).to.equal(false);
    expect(isMatrix('s')).to.equal(false);
    expect(isMatrix({})).to.equal(false);
  });
});
