'use strict';

var _Matrix = require('../Matrix');

var _Matrix2 = _interopRequireDefault(_Matrix);

var _create = require('../lib/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(arr) {
  var isArray = Array.isArray(arr);
  if (isArray && arr.length !== 2 && arr[1] < arr[0]) {
    throw new Error('Invalid length of rows or columns attributes in submatrix');
  }
  if (typeof arr === 'number') {
    return [arr, arr];
  }
  if (!isArray) {
    return true;
  }
  return arr;
};

var getSubLength = function getSubLength(subArr, max) {
  if (!Array.isArray(subArr)) {
    return max;
  }
  return subArr[1] - subArr[0] + 1;
};

var getSubmatrix = function getSubmatrix(config) {
  var rows = validate(config.rows);
  var columns = validate(config.columns);
  var init = {
    row: rows[0] || 0,
    column: columns[0] || 0
  };

  var arr = this.value();

  var subRows = getSubLength(rows, this.dimensions.m);
  var subColumns = getSubLength(columns, this.dimensions.n);

  var subArray = (0, _create2.default)({
    m: subRows,
    n: subColumns
  }, null);

  return (0, _Matrix2.default)(subArray.map(function (row, i) {
    return row.map(function (_, j) {
      return arr[i + init.row][j + init.column];
    });
  }));
};

module.exports = getSubmatrix;