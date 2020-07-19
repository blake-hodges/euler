// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two n-digit numbers.

//largestPalindromeProduct(2) should return a number.
//largestPalindromeProduct(2) should return 9009.
//largestPalindromeProduct(3) should return 906609.

///////input "n" (number of digits in each factor)

//find all the palindromes that can be made by mutliplying any one digit numbers together
//multiply every number from 1 to 9 by 1 to 9
//add all the palindromes to an array
//find the max value of the array

//output the largest product of the two numbers that is a palindrome

function largestPalindromeProduct(n) {
    let arr = [];
    if (n == 2) {
        for (let i = 99; i > 9; i--) {
            for (let x = 99; x > 9; x--) {
                let num = i * x;
                let numReversedStr = num.toString().split('').reverse().join('');
                let numReversedInt = parseInt(numReversedStr, 10);
                if (num == numReversedInt) {
                    arr.push(num);
                }
            }
        }
    } else if (n == 3) {
        for (let i = 999; i > 99; i--) {
            for (let x = 999; x > 99; x--) {
                let num = i * x;
                let numReversedStr = num.toString().split('').reverse().join('');
                let numReversedInt = parseInt(numReversedStr, 10);
                if (num == numReversedInt) {
                    arr.push(num);
                }
            }
        }
    }
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max;


}


console.log(largestPalindromeProduct(3));
