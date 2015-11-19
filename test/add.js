'use strict';
import chai from 'chai';
import myModule from '../source-build/index';

let expect = chai.expect;

describe('Add', ()=>{
  it('works', () =>{
    expect(myModule.add(2,2)).to.eq(4);
  });
});
