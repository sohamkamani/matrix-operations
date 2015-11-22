'use strict';
import createArray from './create';

let getMulValue = (args) => {
  let {
    matrix1, matrix2, i, j, n
  } = args;
  let sum = 0;
  for(let counter = 0 ; counter < n ; counter++){
    sum += matrix1[i][counter] * matrix2[counter][j];
  }
  return sum;
};

let multiply = function (mat2) {
  let matrix1 = this.value();
  let matrix2 = mat2.value();

  let m = this.dimensions.m;
  let n = this.dimensions.n;
  let p = mat2.dimensions.n;

  let returnedArray = createArray({
    m : m,
    n : p
  }, 0);

  return returnedArray.map((row, i)=>{
    return row.map((elem, j)=>{
      return getMulValue({
        matrix1, matrix2, i, j, n
      });
    });
  });
};

module.exports = multiply;
