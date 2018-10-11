// ways of checking if a number is prime

function regexIsPrime(n) {
  let unary = '1'.repeat(n)
  return !(unary.match(/^1?$|^(11+?)\1+$/))
}

function regularIsPrime(n) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

// Prime number sieve (sieve of eratosthenes)

function sieve(n) {
  let nums = []
  let primes = []

  for (let i = 2; i <= n; i++) {
    nums[i] = true
  }

  let limit = Math.sqrt(n)

  for (let i = 2; i < limit; i++) {
    if (nums[i]) {
      for (let j = i ** 2; j <= n; j += i) {
        nums[j] = false
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (nums[i]) {
      primes.push(i)
    }
  }

  return primes
}
