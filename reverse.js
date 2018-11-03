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
console.log(reverseExc("hello there"))
