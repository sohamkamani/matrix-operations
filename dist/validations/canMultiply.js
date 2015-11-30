'use strict';

module.exports = function (mat1, mat2) {
  return mat1.dimensions.n === mat2.dimensions.m;
};