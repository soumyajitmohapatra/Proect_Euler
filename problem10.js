//         Problem 10: Summation of primes

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

const isPrime =(n)=>{
  for(let i=2; i < n; i++){
    if(n % i === 0){
      return false
    }
  }
  return true
}

exports.primeSummation = function (n) {
 let sum = 0, i =2
  while(i<n){   
    if(isPrime(i)){
      sum += i
    }
    i++
  }
  return sum
}

