let expect = require('chai').expect;
let add = require('../source-build/index');

describe('Add', ()=>{
  it('works', () =>{
    expect(add.add).to.eq(5);
  });
});
