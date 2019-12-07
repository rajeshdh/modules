var fillArray = require('../filled-array')
var test = require('tape').test

function indexPlus(index) {
	return index + 1;
}

function fizzBuzz(index) {
	return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}

function comprehensive(index, length, partial) {
	return partial.indexOf(index) === -1 ? index + 1 : length;
}

test('should fill array', function (t) {
  t.deepEqual(fillArray('a', 0), []);
	t.deepEqual(fillArray('a', 1), ['a']);
	t.deepEqual(fillArray('a', 2), ['a', 'a']);
	t.deepEqual(fillArray('a', 5), ['a', 'a', 'a', 'a', 'a']);
	t.deepEqual(fillArray('foo', 2), ['foo', 'foo']);
	t.deepEqual(fillArray(0, 2), [0, 0]);
	t.deepEqual(fillArray(indexPlus, 5), [1, 2, 3, 4, 5]);
	t.deepEqual(
		fillArray(fizzBuzz, 15),
		[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
	);
	t.deepEqual(fillArray(comprehensive, 5), [1, 5, 3, 5, 5]);
  t.end()
})

