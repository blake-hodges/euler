// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

//start at n and loop, adding 1 to n each time
//loop through numbers from 1 to n
//check if first number is divisible by every number from 1 to n



function smallestMult(n) {
    //stop loop when i is less than 300,000,000 to prevent infinite loop
    //change i to a larer number to test for numbers above 13
    for (let i = n; i < 300000000; i++) {
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

console.log(smallestMult(20));
