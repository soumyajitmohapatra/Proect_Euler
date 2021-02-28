//                 Problem 5: Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?


function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if(a%b != 0) { 
      return gcd(b,a%b); 
  }else {
      return b; 
  }
} 

exports.smallestMult = function (n) {
  let maxLCM = 1;

  //Getting the LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}