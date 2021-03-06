// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the nth prime number?

//input n, a natural number

//loop through all numbers
//check if a number is Prime
//if it's prime, add to an array
//return number at array position n

//output the nth prime number



function nthPrime(n) {
    let primesArray = [];
    for (let i = 2; primesArray.length <= n; i++) {
        let result = isPrime(i);
        if (result == true) {
            primesArray.push(i);
        }
    }
    return primesArray[n - 1];

    function isPrime(num) {
        let res = true;
        if (num == 2 || num == 3) {
            return true;
        } else if  (num % 2 == 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                res = false
            }
        }
        return res;

    }
}







console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));
