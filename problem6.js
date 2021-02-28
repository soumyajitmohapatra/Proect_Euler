//             Problem 6: Sum square difference

// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

exports.sumSquareDifference = function (n) {
  const arr = [...Array(n).keys()].map( i => i+1)

  const squareOfSum = arr.reduce((r,c)=>(r + Math.pow(c,2)))
  const sumOfSquare = arr.reduce((r,c)=> r + c)

  return  Math.pow(sumOfSquare, 2) -  squareOfSum
}

