'use strict'

function dedupe (client, hasher) {
  hasher = hasher || JSON.stringify
  const clone = []
  const lookup = {}

  for (let i = 0; i < client.length; i++) {
    const elem = client[i]
    const hashed = hasher(elem)
    if (!lookup[hashed]) {
      clone.push(elem)
      lookup[hashed] = true
    }
  }

  return clone
}

module.exports = dedupe
