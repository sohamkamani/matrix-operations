let expect = require('chai').expect;
let myModule = require('../source-build/index');

describe('Add', ()=>{
  it('works', () =>{
    expect(myModule.add(2,2)).to.eq(4);
  });
});
