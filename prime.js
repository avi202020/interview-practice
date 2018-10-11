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



// With comments

function sieveWithComments(num) {
  let nums = []
  let primes = []
  // generate a list of numbers from 2 to num
  // we are leaving them all as true because they are (unmarked)
  for (let i = 2; i < num; i++) {
    nums[i] = true;
  }

  // Since we are squaring all of these numbers start, we should limit at the sqrt
  let limit = Math.sqrt(num)

  // The first number is 2
  for (let i = 2; i < limit; i++) {
    if (nums[i]) {
      // When i is 2, cross out every second number going up
      // When i is 3, start at 9 (3 ** 2) because 6 was already marked false when we did 2
      // When i is 5, start at 25 (5 ** 2) because we already marked 10, 15, and 20
      for (let j = i ** 2; j < num; j += i) {
        nums[j] = false
      }
    }
  }

  //The ones left unmarked (i.e. true) are prime!
  for (let i = 2; i < num; i++) {
    if (nums[i]) {
      primes.push(i)
    }
  }

  return primes
}

// Check Prime

function regexIsPrimeWithComments(n) {
  // Array(n + 1).join(1) is '111'
  // could also be "1".repeat(n)

  // When n is 3
  // '111'.match(/^1?$/) either matches 0 or 1 '1' from start of line to end

  // (11+?)\1+
  // '111' will try to match '11' + '11' AKA '1111', then '111' + '111',

  return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/))
}
