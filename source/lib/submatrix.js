'use strict';
import Matrix from '../Matrix';
import createArray from '../lib/create';

const validate = (arr)=>{
  if(Array.isArray(arr) && arr.length !== 2 && arr[1] < arr[0]){
    throw new Error('Invalid length of rows or columns attributes in submatrix');
  }
};

const getSubLength = (subArr, max){
  if(!Array.isArray(subArr)){
    return max;
  }
  return subArr[1] - subArr[0];
};

const getSubmatrix = function(config){
  const {rows, columns} = config;
  validate(rows);
  validate(columns);

  const arr = this.value();

  const subRows = getSubLength(rows);
  const subColumns = getSubLength(columns);

  let subArray = createArray({
    m : subRows,
    n : subColumns
  }, null);

};
