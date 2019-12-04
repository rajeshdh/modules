/**
 * Tiny module to create a new dense array with the specified range.

var range = require('array-range')
range(3)       // -> [ 0, 1, 2 ]
range(1, 4)    // -> [ 1, 2, 3 ]
 */

module.exports = function newArray (start, end) {
  var n0 = typeof start === 'number'
  var n1 = typeof end === 'number'

  if (n0 && !n1) {
    end = start
    start = 0
  } else if (!n0 && !n1) {
    start = 0
    end = 0
  }

  start = start | 0
  end = end | 0
  var len = end - start
  if (len < 0) { throw new Error('array length must be positive') }

  var a = new Array(len)
  for (var i = 0, c = start; i < len; i++, c++) { a[i] = c }
  return a
}
