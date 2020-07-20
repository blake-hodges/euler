
//
// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

//input "n" (number of natural numbers to include)

//loop through n numbers from 1 to n
//find n^2 and add to total sum

//loop through n numbers from 1 to n
//add up all numbers and find square of the sum

//find the difference between the two

//output sum of squares of first n numbers minus the square of the sum of those first ten numbers

function sumSquareDifference(n) {
    let sumOfSquares = 0;
    for (let i = 1; i < n + 1; i++) {
        let x = Math.pow(i, 2);
        sumOfSquares = sumOfSquares + x;
    }
    let total = 0;
    for (let i = 1; i < n + 1; i++) {
        total = total + i;
    }
    let squareOfSum = Math.pow(total, 2);
    return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(100));
