'use strict';
import isMatrix from './validations/isMatrix';

module.exports = function(arr){
  if(!isMatrix(arr)){
    throw new Error('Array is not a matrix');
  }

  let value = ()=> arr;
  let dimensions = {
    m : arr.length,
    n: arr[0].length
  };
  return {
    value,
    dimensions
  };
};
