'use strict';
import chai from 'chai';
import myModule from '../source/index';

let expect = chai.expect;

describe('Add', ()=>{
  it('works', () =>{
    expect(myModule.add(2,2)).to.eq(4);
  });
});
