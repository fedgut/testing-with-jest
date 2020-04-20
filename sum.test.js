import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  const total = sum(1, 2);
  expect(total).toBe(3);
});

test('adding positive numbers aint 0', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(sum(a, b)).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
  expect(n).not.toBeTruthy();
});

test('cero', () => {
  const z = 0;
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).toBeFalsy();
  expect(z).not.toBeTruthy();
})
