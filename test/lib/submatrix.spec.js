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

  it('gives a submatrix', () => {
    assert.deepEqual(m1.subMatrix({
      rows: [0, 1],
      columns: [1, 2]
    }).value(), [
      [2, 3],
      [5, 6]
    ]);
  });
});
