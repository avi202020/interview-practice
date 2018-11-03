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



function mergeSort(arr) {
  if (arr.length <=1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  if (!left || left.length === 0) return right
  if (!right || right.length === 0) return left

  if (left[0] < right[0]) {
    const first = left.shift()
    const newArray = merge(left, right)
    return [first, ...newArray]
  } else {
    const first = right.shift()
    const newArray = merge(left, right)
    return [first, ...newArray]
  }
}
