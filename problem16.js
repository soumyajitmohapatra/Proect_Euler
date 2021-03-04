//         Problem 16: Power digit sum

// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^exponent??


<<<<<<< HEAD
exports.powerDigitSum = function(exponent) {

  const num = BigInt(Math.pow(2, exponent))
  let arr = num.toString().split('')
  arr.slice(arr.length - 1)

  return arr.reduce((r, c) => parseInt(r) + parseInt(c))
=======
exports.powerDigitSum = function (exponent) {

 let num = BigInt(Math.pow(2, exponent))
  let arr = num.toString().split('')
  arr.slice(arr.length - 1)
  
  return arr.reduce((r,c)=> parseInt(r)+parseInt(c))
>>>>>>> aff6582dba67a42d27289f796e9aa140f07b6b2c
}

