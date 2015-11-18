'use strict';

var expect = require('chai').expect;
var add = require('../source-build/index');

describe('Add', function () {
  it('works', function () {
    expect(add.add).to.eq(5);
  });
});