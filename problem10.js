//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

//Find the sum of all the primes below n.

//loop from 2 to n and find all the prime numbers
//add these numbers to an array
//add up all the numbers in the array

//input: a number "n"

//output: the sum of all the prime numbers below n

function primeSummation(n) {
    //array to hold the prime numbers
    let total = 2;
    //loop through numbers from 2
    for (let i = 1; i < n; i = i + 2) {
        // number is prime push to PrimesArray
        if (isPrime(i) == true) {
            total = total + i;
        }
    }
    return total;




    function isPrime(num) {
        //variable to hold true or false for each number passed into isPrime
        let result = true;
        if (num == 1) {
            return false
        }
        //return true for 2 and 3
        if (num == 2 || num == 3) {
            return true;

        //return false for any number that can be divided evenly by two
        } else if (num % 2 == 0) {
            return false;
        }
        //loop through all numbers from 3 to the square root of num
        for (let i = 3; i <= Math.sqrt(num); i++) {
            //if num can be evenly divided by any i it isn't prime
            if (num % i == 0) {
                return false;
            }
        }
        return result;
    }


}

let start = performance.now();
console.log(primeSummation(2000000));
let end = performance.now();
console.log(end - start);
