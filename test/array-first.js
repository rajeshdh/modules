'use strict'

var tape = require('tape')
var first = require('../array-first')

tape('throw an error if the value passed is not an array', function (t) {
  t.plan(1)
  t.throws(function () {
    first()
  }, /array-first expects an array as the first argument./)
})

tape('return the first element in the array', function (t) {
  t.plan(1)

  var actual = first(['a', 'b', 'c', 'd', 'e', 'f'])
  t.equal(actual, 'a')
})

tape('return the first n elements in the array', function (t) {
  t.plan(1)

  var actual = first(['a', 'b', 'c', 'd', 'e', 'f'], 3)
  t.deepEqual(actual, ['a', 'b', 'c'])
})
