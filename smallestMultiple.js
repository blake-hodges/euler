// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

//start at n and loop, adding 1 to n each time
//loop through numbers from 1 to n
//check if first number is divisible by every number from 1 to n

function smallestMult(n) {
    for (let i = n; i > -1; i++) {
        let result = true;
        for (let x = 2; x <= n; x++) {
            if (i % x !== 0) {
                result = false;
                break;
            } else {
                result = true;
            }
        }
        if (result == true) {
            return i;
        }
    }
}

console.log(smallestMult(10));
