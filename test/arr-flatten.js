'use strict';

var tape = require('tape')
var flatten = require('../arr-flatten');

var fixtures = [
  {
    "array": ['a', 'b', ['c'], 'd', ['e']],
    "expected": ['a', 'b', 'c', 'd', 'e']
  },
  {
    "array": ['a', [[[[[[[['b', [['c']]]]]], 'd', ['e']]]]]],
    "expected": ['a', 'b', 'c', 'd', 'e']
  },
  {
    "array":['a', 'b', ['c'], 'd', ['e']],
    "expected": ['a', 'b', 'c', 'd', 'e']
  },
  {
    "array": [['a', ['b', ['k', ['a', ['b', ['c'], [['a', [['a', ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]], ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]], ['a', ['x', ['c'], ['a', ['x', ['k']], [['a', ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]],
    "expected": [ 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'a', 'x', 'c', 'a', 'x', 'k', 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e' ]
  }
]
fixtures.forEach(function (f) {
  tape('returns ' + f.expected + ' for ' + f.array, function (t) {
    t.plan(1)

    var actual = flatten(f.array)
    t.deepEqual(actual, f.expected)
  })
})