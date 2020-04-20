import { capitalize, reverseString, cipher, analyze } from '../src/odin';

const string = 'string';

test('Capitalize the first letter of a string', () => {
  expect(capitalize(string)).toEqual('String');
});

test('Reverse a string', () => {
  expect(reverseString(string)).toEqual('gnirts');
});

test('Cypher can encode with shift = 5', () => {
  const code = cipher(5, string);
  expect(code).toBe('xywnsl');
});

test('Cypher can encode with shift = 5 keeping correct capitalization', () => {
  const capitalString = 'StringAZ';
  const code = cipher(5, capitalString);
  expect(code).toBe('XywnslFE');
});

test('Cypher can encode with shift = 5 keeping correct punctuation', () => {
  const punctuatedString = 'StringAZ.';
  const code = cipher(5, punctuatedString);
  expect(code).toBe('XywnslFE.');
});

test('analyze gives correct data', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});
