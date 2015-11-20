'use strict';

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b ;

let dotOperation = (operation)=> function(mat1, mat2){
  let mat3 = mat1.map((row, i) =>{
    return row.map((elem, j)=> operation(elem, mat2[i][j]));
  });
  return mat3;
};

module.exports = {
  add : dotOperation(add),
  subtract : dotOperation(subtract),
  multiply : dotOperation(multiply),
  divide : dotOperation(divide)
};
