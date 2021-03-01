//               Problem 7: 10001st prime

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?


exports.nthPrime =function(n) {
let primes = [2]
  let i = 3
  let j = 2

  while (primes.length < n) {
    while (i % j !== 0) {
      j++;
      if ( j === i ) {
        primes.push(i)
        break;
      }
    }
    i++
    j = 2
  }

  
  return primes[n-1]
}