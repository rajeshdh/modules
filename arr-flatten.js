module.exports = function (arr) {
  return flat(arr, [])
}

function flat (arr, res) {
  var i = 0; var cur
  var len = arr.length
  for (; i < len; i++) {
    cur = arr[i]
    Array.isArray(cur) ? flat(cur, res) : res.push(cur)
  }
  return res
}
