'use strict'

var tape = require('tape')
var dedupe = require('../dedupe')

var fixtures = [
  {
    array: [1, 1, 2, 3, 4, 5, 6],
    expected: [1, 2, 3, 4, 5, 6]
  },
  {
    array: [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6], // multiple duplicates
    expected: [1, 2, 3, 4, 5, 6]
  },
  {
    array: [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 1, 1, 1, 1], // multiple duplicates of multiple values
    expected: [1, 2, 3, 4, 5, 6]
  },
  {
    array: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 3 }], // duplicates of complex values'
    expected: [{ a: 1 }, { a: 2 }, { a: 3 }]
  }
]
fixtures.forEach(function (f) {
  tape('returns ' + f.expected + ' for ' + f.array, function (t) {
    t.plan(1)

    var actual = dedupe(f.array)
    t.deepEqual(actual, f.expected)
  })
})

tape('should remove duplicates of complex values when using a custom hasher', (t) => {
  t.plan(1)
  const actual = dedupe([{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }, { a: 3, b: 4 }], value => value.a)

  t.deepEqual(actual, [{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }])
})

tape('should remove date duplicates', (t) => {
  t.plan(1)
  const myDate = new Date(2017, 0, 1)
  const actual = dedupe([myDate, myDate, myDate])

  t.deepEqual(actual, [myDate])
})

tape('should remove date duplicates inside a complex object', (t) => {
  t.plan(1)
  const myDate = new Date(2017, 0, 1)
  const actual = dedupe([{ date: myDate }, { date: myDate }, { date: myDate }])

  t.deepEqual(actual, [{ date: myDate }])
})
