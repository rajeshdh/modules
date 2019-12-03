var last = require('../array-last')
var tape = require('tape')

var fixtures = [
  {
    "array": ['a', 'b', 'c', 'd', 'e', 'f'],
    "num": '',
    "expected": 'f'
  },
  {
    "array": ['a', 'b', 'c', 'd', 'e', 'f'],
    "num": 1,
    "expected": 'f'
  },
  {
    "array": ['a', 'b', 'c', 'd', 'e', 'f'],
    "num": 3,
    "expected": ['d', 'e', 'f']
  },
  {
    "array": [],
    "num": '',
    "expected": null
  }
]
fixtures.forEach(function (f) {
  tape('returns ' + f.expected + ' for ' + f.array, function (t) {
    t.plan(1)

    var actual = last(f.array, f.num)
    t.deepEqual(actual, f.expected)
  })
})


tape('throws an error if invalid arguments are passed', function (t) {
  t.plan(3)
  t.throws(function () {
    last()
  }, /expected/i)
  t.throws(function () {
    last('foobar')
  }, /expected/i)
  t.throws(function () {
    last({ foo: 'bar' })
  }, /expected/i)
})