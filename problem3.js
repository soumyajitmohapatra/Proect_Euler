//           Problem 3: Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

exports.largestPrimeFactor = function (n) {
  let i=2;
    while (i<=n){
    if (n%i == 0){
        n/=i;    
    }else{
        i++;
    }
}
  return i;
}

