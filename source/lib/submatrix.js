'use strict';
import Matrix from '../Matrix';
import createArray from '../lib/create';

const validate = (arr) => {
  let isArray = Array.isArray(arr);
  if (isArray && arr.length !== 2 && arr[1] < arr[0]) {
    throw new Error('Invalid length of rows or columns attributes in submatrix');
  }
  if(typeof arr === 'number'){
    return [arr, arr];
  }
  if(!isArray){
    return true;
  }
  return arr;
};

const getSubLength = (subArr, max)=> {
  if (!Array.isArray(subArr)) {
    return max;
  }
  return subArr[1] - subArr[0] + 1;
};

const getSubmatrix = function (config) {
  const rows = validate(config.rows);
  const columns = validate(config.columns);
  const init = {
    row : rows[0] || 0,
    column : columns[0] ||0
  };

  const arr = this.value();

  const subRows = getSubLength(rows, this.dimensions.m);
  const subColumns = getSubLength(columns, this.dimensions.n);

  let subArray = createArray({
    m: subRows,
    n: subColumns
  }, null);

  return Matrix(subArray.map((row, i) =>{
    return row.map((_, j) =>{
      return arr[i + init.row][j + init.column];
    });
  }));
};

module.exports = getSubmatrix;
