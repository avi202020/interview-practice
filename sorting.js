function quickSort(arr) {
  if (arr.length <= 1) return arr

  let i = Math.floor(Math.random() * arr.length)
  let pivot = arr.splice(i, 1)
  let left = []
  let right = []

  arr.forEach(n => n < pivot ? left.push(n) : right.push(n))

  let sortedLeft = quickSort(left)
  let sortedRight = quickSort(right)

  return [...sortedLeft, ...pivot, ...sortedRight]
}
