const { first, last, concat ,chunk } = require('./functions');

// Test the 'first' function
describe('first', () => {
  test('returns the first n elements of an array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(first(array, 3)).toEqual([1, 2, 3]);
  });

  test('returns an empty array if n is less than or equal to 0', () => {
    const array = [1, 2, 3, 4, 5];
    expect(first(array, -1)).toEqual([]);
  });

  test('returns the first element of the array if n is not provided', () => {
    const array = [1, 2, 3, 4, 5];
    expect(first(array)).toBe(1);
  });
});

// Test the 'last' function
describe('last', () => {
  test('returns the last n elements of an array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(last(array, 3)).toEqual([3, 4, 5]);
  });

  test('returns an empty array if the input array is null', () => {
    expect(last(null, 3)).toEqual([]);
  });

  test('returns the last element of the array if n is not provided', () => {
    const array = [1, 2, 3, 4, 5];
    expect(last(array)).toBe(5);
  });
});

// Test the 'concat' function
describe('concat', () => {
  test('concatenates all the elements of an array of strings', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(concat(array)).toBe('abcde');
  });

  test('returns an empty string if the input array is empty', () => {
    const array = [];
    expect(concat(array)).toBe('');
  });
});

// Test the 'chunk' function
describe('chunk', () => {
  test('divides an array into sub-arrays of predefined size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  test('returns an empty array if the input array is empty', () => {
    const array = [];
    expect(chunk(array, 2)).toEqual([]);
  });
});