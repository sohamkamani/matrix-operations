'use strict';

module.exports = function(matrix){
  if(!Array.isArray(matrix)){
    return false;
  }
  let isNumber = (n) => n !== null && !isNaN(Number(n));
  let isMatrix = true;
  let matrixRowLengths = matrix.map((row) => row.length || null);

  matrixRowLengths.reduce((prevLength, currentLength)=> {
    isMatrix = isMatrix && isNumber(currentLength) && (prevLength === currentLength);
    return currentLength;
  });

  if(!isMatrix){
    return false;
  }

  matrix.forEach((matrixRow) =>{
    matrixRow.forEach((matrixElem) =>{
      isMatrix = (isMatrix && isNumber(matrixElem));
    });
  });
  return isMatrix;
};
