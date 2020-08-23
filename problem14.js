//Project Euler: Problem 14: Longest Collatz sequence

function longestCollatzSequence(limit) {
    //placeholder for max numbers in a sequence
    let maxVal = 0;
    //placeholder for the first number of longest sequence
    let res = 0;
    //loop from limit minus one to 1
    for (let i = limit - 1; i > 0; i--) {
        let myArr = [];
        //add first number to sequence arr
        myArr.push(i);
        //loop from i to 1
        let n = i;
        while (n > 1) {
            if (n % 2 == 0) {
                n = n/2;
            } else {
                n = (3 * n) + 1
            }
            myArr.push(n)
        }
        if (myArr.length > maxVal) {
            maxVal = myArr.length;
            res = myArr[0];
        }
    }
    return res;


}
console.log(longestCollatzSequence(13));
