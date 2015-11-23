'use strict';
import Matrix from '../../source/Matrix';
import {
  assert
}
from 'chai';

describe('Sub- matrix', function () {
  const m1 = Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  it('gives a submatrix with array of rows and columns', () => {
    assert.deepEqual(m1.subMatrix({
      rows: [0, 1],
      columns: [1, 2]
    }).value(), [
      [2, 3],
      [5, 6]
    ]);
  });
  it('gives a submatrix with number of rows and array of columns', () => {
    assert.deepEqual(m1.subMatrix({
      rows: 2,
      columns: [1, 2]
    }).value(), [
      [8, 9]
    ]);
  });
  it('gives a submatrix with array of rows and number columns', () => {
    assert.deepEqual(m1.subMatrix({
      rows: [0, 2],
      columns: 1
    }).value(), [
      [2],
      [5],
      [8]
    ]);
  });
  it('gives a submatrix with all rows and number columns if rows is given true', () => {
    assert.deepEqual(m1.subMatrix({
      rows: true,
      columns: 1
    }).value(), [
      [2],
      [5],
      [8]
    ]);
  });
  it('gives a submatrix with all columns and number rows if columns is given true', () => {
    assert.deepEqual(m1.subMatrix({
      rows: 2,
      columns: true
    }).value(), [
      [7, 8, 9]
    ]);
  });
});
