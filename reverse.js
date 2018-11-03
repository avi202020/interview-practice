// Reverse a string without using Array.prototype.reverse()

function reverse(str) {
  return str.split("").reduce((acc, current) => current + acc)
}

// reverse a string but keep the periods in the same position in the string

function reverseExc(str) {
  let chars = str.split("")
  let indexes = []

  chars.forEach((char, idx) => { if (char === ".") { indexes.push(idx) } })

  let filtered = chars.filter(char => char !== ".").reduce((a, b) => [b, ...a], [])

  indexes.forEach(index => filtered.splice(index, 0, "."))

  return filtered.join("")
}

// reverse a number

function reverseInt(n) {
  const string = n < 0 ? (0 - n).toString() : n.toString()
  const reverse = string.split("").reduce((acc, current) => current + acc);
  return n < 0 ? (0 - parseInt(reverse)) : parseInt(reverse);
}
