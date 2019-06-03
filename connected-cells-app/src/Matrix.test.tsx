import Matrix from './Matrix';

it('sample 1', () => {
  const matrix = new Matrix(4, 4, `1 1 0 0
  0 1 1 0
  0 0 1 0
  1 0 0 0`);
  expect(matrix.calc()).toEqual(5);
});

it('sample 2', () => {
  const matrix = new Matrix(5, 5, `1 1 0 0 0
0 1 1 0 0
0 0 1 0 1
1 0 0 0 1
0 1 0 1 1`);
  expect(matrix.calc()).toEqual(5);
});

it('worst case', () => {
  const matrix = new Matrix(5, 5, `1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1`);
  expect(matrix.calc()).toEqual(25);
});

it('position', () => {
  const matrix = new Matrix(4, 4, `1 1 0 0
  0 1 1 0
  0 0 1 0
  1 0 0 0`);
  expect(matrix.getSurroundingCells({
    j: 0,
    k: 0,
  })).toEqual([
    {j: 0, k: 1},
    {j: 1, k: 0},
    {j: 1, k: 1},
  ]);

  expect(matrix.getSurroundingCells({
    j: 3,
    k: 3,
  })).toEqual([
    {j: 2, k: 2},
    {j: 2, k: 3},
    {j: 3, k: 2},
  ]);
});
