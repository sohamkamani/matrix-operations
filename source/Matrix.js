'use strict';
import assign from 'object-assign';
import isMatrix from './validations/isMatrix';

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

module.exports = Matrix;


var dotOperations = require('./lib/dot-operations');
var isSquare = require('./validations/isSquare');
var createArray = require('./lib/create');
var multiply = require('./lib/multiply');
var canMultiply = require('./validations/canMultiply');

/*
Building exposed validations
*/
let validations = {
  isSquare
};

/*
Building matrix dot operations
*/
// let convertDotOperation = (operation) => function (mat2) {
//   if (!canAdd(this, mat2)) {
//     throw new Error('no');
//   }
//   return Matrix(operation(this.value(), mat2.value()));
// };
//
// let matrixDotOperations = {};
// Object.keys(dotOperations)
//   .forEach((key) => {
//     matrixDotOperations[key] = convertDotOperation(dotOperations[key]);
//   });
let matrixDotOperations = dotOperations;

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
