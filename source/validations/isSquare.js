'use strict';
module.exports = function(){
  let matrix =this;
  let dimensions = matrix.dimensions;
  return dimensions.m === dimensions.n;
};
