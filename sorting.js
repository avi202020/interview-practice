// quicksort with hoare's partitioning scheme

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;
  const pivot = arr[Math.floor((right + left) / 2)];
  const index = partition(arr, left, right, pivot);
  quicksort(arr, left, index - 1);
  quicksort(arr, index, right);
  return arr;
}

function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right --;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

// out-of-place version of quicksort
function basicQuickSort(arr) {
  if (arr.length <= 1) return arr
  
  const i = Math.floor(Math.random() * arr.length)
  const pivot = arr.splice(i, 1)
  const left = []
  const right = []

  arr.forEach(n => n < pivot ? left.push(n) : right.push(n))

  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)

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
