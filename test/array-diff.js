var diff = require('../array-diff')
var test = require('tape').test

test('should diff array', function (t) {
  t.deepEqual(diff(['a', 'b', 'c'], ['b', 'c', 'e']), ['a'])
  t.deepEqual(diff(['x', 'b', 'c', 'e', 'y'], ['b', 'x', 'e']), ['c', 'y'])
  t.deepEqual(diff(['x', 'x'], ['a', 'b', 'c']), ['x', 'x'])
  t.deepEqual(diff(['x'], ['a', 'b', 'c']), ['x'])
  t.deepEqual(diff(['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e']), ['b', 'b', 'b', 'c', 'y'])
  t.end()
})

test('should remove all occurrences of an element', function (t) {
  t.deepEqual(diff(['a', 'b', 'b', 'b', 'b'], ['b']), ['a'])

  t.end()
})

test('should not modify the input array:', function (t) {
  var arr = ['x', 'b', 'b', 'b', 'c', 'e', 'y']
  var intest = arr.slice()
  diff(arr, ['x', 'e'])
  t.deepEqual(arr, intest)

  t.end()
})

test('should diff elements from multiple arrays:', function (t) {
  t.deepEqual(diff(['a', 'b', 'c'], ['a'], ['b']), ['c'])

  t.end()
})

test('should return an empty array if no unique elements are in the first array:', function (t) {
  t.deepEqual(diff(['a'], ['a', 'b', 'c']), [])

  t.end()
})

test('should return the first array if the second array is empty:', function (t) {
  t.deepEqual(diff(['a', 'b', 'c'], []), ['a', 'b', 'c'])

  t.end()
})

test('should return the first array if no other args are passed:', function (t) {
  t.deepEqual(diff(['a', 'b', 'c']), ['a', 'b', 'c'])

  t.end()
})

test('should testerate over sparse arguments:', function (t) {
  t.deepEqual(diff(['a', 'b', 'c'], null, ['a', 'b']), ['c'])

  t.end()
})
