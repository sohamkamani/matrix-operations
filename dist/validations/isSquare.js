'use strict';

module.exports = function () {
  var matrix = this;
  var dimensions = matrix.dimensions;
  return dimensions.m === dimensions.n;
};