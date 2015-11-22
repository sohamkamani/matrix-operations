'use strict';

let createRow = (size, n) => {
  let row = [];
  let i = 0;
  for (i = 0; i < size; i++) {
    row.push(n);
  }
  return row;
};

let createArray = (dimensions, n) =>{
  let arr = [];
  let i = 0 ;
  while(i < dimensions.m){
    arr.push(createRow(dimensions.n ,n));
    i += 1;
  }
  return arr;
};

module.exports = createArray;
