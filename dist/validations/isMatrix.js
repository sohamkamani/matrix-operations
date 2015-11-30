'use strict';

module.exports = function (matrix) {
  if (!Array.isArray(matrix)) {
    return false;
  }
  var isNumber = function isNumber(n) {
    return n !== null && !isNaN(Number(n));
  };
  var isMatrix = true;
  var matrixRowLengths = matrix.map(function (row) {
    return row.length || null;
  });

  matrixRowLengths.reduce(function (prevLength, currentLength) {
    isMatrix = isMatrix && isNumber(currentLength) && prevLength === currentLength;
    return currentLength;
  });

  if (!isMatrix) {
    return false;
  }

  matrix.forEach(function (matrixRow) {
    matrixRow.forEach(function (matrixElem) {
      isMatrix = isMatrix && isNumber(matrixElem);
    });
  });
  return isMatrix;
};