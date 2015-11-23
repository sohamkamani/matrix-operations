'use strict';
import Matrix from '../Matrix';
import canAdd from '../validations/canAdd';

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let dotOperation = (operation) => function (mat1, mat2) {
  let mat3 = mat1.map((row, i) => {
    return row.map((elem, j) => operation(elem, mat2[i][j]));
  });
  return mat3;
};

let dotOperations = {
  add: dotOperation(add),
  subtract: dotOperation(subtract),
  dotMultiply: dotOperation(multiply),
  dotDivide: dotOperation(divide)
};
// let Matrix = require('../Matrix');

let convertDotOperation = (operation) => function (mat2) {
  if (!canAdd(this, mat2)) {
    throw new Error('no');
  }
  return new Matrix(operation(this.value(), mat2.value()));
};

let matrixDotOperations = {};
Object.keys(dotOperations)
  .forEach((key) => {
    matrixDotOperations[key] = convertDotOperation(dotOperations[key]);
  });

module.exports = matrixDotOperations;
