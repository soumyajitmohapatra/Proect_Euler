//           Problem 4: Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.



exports.largestPalindromeProduct = function (n) {
  let max = +(Array(n).fill(9).join(''))
  let min = (max + 1) / 10
  let arr = []   

    for(let i =max; i>min; i--){
        for(let j = max; j>min; j--){
            let mul = j*i
            if(isPalin(mul)){
                arr.push(j * i)
            }
        }
    }

    return Math.max(...arr)
}

function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("")
}

