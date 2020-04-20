import { sum, substract, divide, multiply } from '../src/sum';

test('adds 1 + 2 to equal 3', () => {
  const total = sum(1, 2);
  expect(total).toBe(3);
});

test('substract 3 - 1 to equal 2', () => {
  const total = substract(3, 1);
  expect(total).toBe(2);
});

test('Divide 25 by 5 is 5', () => {
  const total = divide(25, 5);
  expect(total).toBe(5);
});

test('Multiply 5 by 5 is 25', () => {
  const total = multiply(5, 5);
  expect(total).toBe(25);
});
