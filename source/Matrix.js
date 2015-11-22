'use strict';
import assign from 'object-assign';
import isMatrix from './validations/isMatrix';
import dotOperations from './lib/dot-operations';
import canAdd from './validations/canAdd';
import isSquare from './validations/isSquare';

let Matrix = function (arr) {
  if (!isMatrix(arr)) {
    throw new Error('Array is not a matrix');
  }

  /*
  Building Core Matrix object
  */
  let value = () => arr;
  let dimensions = {
    m: arr.length,
    n: arr[0].length
  };

  let coreObject = {
    value,
    dimensions
  };

  /*
  Building exposed validations
  */
  let validations = {
    isSquare
  };

  /*
  Building matrix dot operations
  */
  let convertDotOperation = (operation) => (mat2) => {
    if (!canAdd(coreObject, mat2)) {
      throw new Error('no');
    }
    return Matrix(operation(value(), mat2.value()));
  };

  let matrixDotOperations = {};
  Object.keys(dotOperations)
    .forEach((key) => {
      matrixDotOperations[key] = convertDotOperation(dotOperations[key]);
    });

  /*
  Building Matrix object from various modules
  */
  return assign(coreObject, matrixDotOperations, validations);

};

module.exports = Matrix;
