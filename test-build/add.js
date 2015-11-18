'use strict';

var expect = require('chai').expect;
var myModule = require('../source-build/index');

describe('Add', function () {
  it('works', function () {
    expect(myModule.add(2, 2)).to.eq(4);
  });
});