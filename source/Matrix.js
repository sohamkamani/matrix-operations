'use strict';
import assign from 'object-assign';
import isMatrix from './validations/isMatrix';
import dotOperations from './lib/dot-operations';
import canAdd from './validations/canAdd';
import isSquare from './validations/isSquare';
import createArray from './lib/create';
import multiply from './lib/multiply';
import canMultiply from './validations/canMultiply';

let Matrix = function (arr) {
  if(!(this instanceof Matrix)){
    return new Matrix(arr);
  }

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
    dimensions,
    isMatrix: true
  };
  assign(this, coreObject);
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
let convertDotOperation = (operation) => function (mat2) {
  if (!canAdd(this, mat2)) {
    throw new Error('no');
  }
  return Matrix(operation(this.value(), mat2.value()));
};

let matrixDotOperations = {};
Object.keys(dotOperations)
  .forEach((key) => {
    matrixDotOperations[key] = convertDotOperation(dotOperations[key]);
  });

/*
Matrix cross operations
*/
let crossOperations = {
  multiply: function (mat2) {
    if (!canMultiply(this, mat2)) {
      throw new Error('Cannot multiply matrices : dimension mismatch');
    }
    let result = multiply.call(this, mat2);
    return Matrix(result);
  }
};
/*
Building Matrix object from various modules
*/
assign(Matrix.prototype, matrixDotOperations, validations, crossOperations);



/*
  Static methods
*/

Matrix.ones = (m, n) => {
  return Matrix(createArray({
    m, n
  }, 1));
};

Matrix.zeros = (m, n) => {
  return Matrix(createArray({
    m: m,
    n: n
  }, 0));
};

module.exports = Matrix;
