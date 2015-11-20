'use strict';
import Matrix from '../Matrix';
import canAdd from '../validations/canAdd';

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b ;

let dotOperation = (operation)=> function(matrix){
  let self = this;
  if(!canAdd(self, matrix)){
    throw new Error('Cannot perform operation : dimension mismatch');
  }
  let mat1 = self.value();
  let mat2 = matrix.value();
  let mat3 = mat1.map((row, i) =>{
    return row.map((elem, j)=> operation(elem, mat2[i][j]));
  });
  return Matrix(mat3);
};

module.exports = {
  add : dotOperation(add),
  subtract : dotOperation(subtract),
  multiply : dotOperation(multiply),
  divide : dotOperation(divide)
};
