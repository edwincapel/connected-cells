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
