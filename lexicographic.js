// Algorithm to print every possible permutation in lexicographic order

// Find the largest x such that P[x]<P[x+1].
// (If there is no such x, P is the last permutation.)
// Find the largest y such that P[x]<P[y].
// Swap P[x] and P[y].
// Reverse P[x+1 .. n].

function makePermutation(arr) {
  let largestX = -1;
  let largestY = -1;

  arr.forEach((el, idx) => {
    if (arr[idx + 1] && el < arr[idx + 1]) {
      largestX = idx;
    }
  })

  if (largestX < 0) return false;

  arr.forEach((el, idx) => {
    if (el > arr[largestX]) {
      largestY = idx;
    }
  })

  swap(arr, largestX, largestY);

  let end = arr.splice(largestX + 1).reverse();
  return arr.concat(end);
}

function lexicographic(arr) {
  let finished = false;
  let permutation = arr.slice();
  const permutations = [arr];

  while (!finished) {
    permutation = makePermutation(permutation);

    if (!permutation) {
      finished = true;
    } else {
      permutations.push([...permutation]);
    }
  }
  return permutations;
}

function swap(arr, i, k) {
  const temp = arr[i];
  arr[i] = arr[k];
  arr[k] = temp;
}

console.log(lexicographic([0, 1, 2, 3, 4, 5]));
