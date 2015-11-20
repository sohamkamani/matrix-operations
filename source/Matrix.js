'use strict';
import assign from 'object-assign';
import isMatrix from './validations/isMatrix';
import dotOperations from './lib/dotOperations';
import canAdd from './validations/canAdd';

let Matrix = function(arr){
  if(!isMatrix(arr)){
    throw new Error('Array is not a matrix');
  }

  let value = ()=> arr;
  let dimensions = {
    m : arr.length,
    n: arr[0].length
  };

  let coreObject = {
    value,
    dimensions
  };

  let convertDotOperation = (operation) => (mat2) => {
    if(!canAdd(coreObject, mat2)){
      throw new Error('no');
    }
    return Matrix(operation(value(), mat2.value()));
  };

  let matrixDotOperations = {};
  Object.keys(dotOperations).forEach((key)=>{
    matrixDotOperations[key] = convertDotOperation(dotOperations[key]);
  });

  return assign(coreObject, matrixDotOperations);

};

module.exports = Matrix;
