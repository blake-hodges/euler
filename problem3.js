
function largestPrimeFactor(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i);
            //console.log(arr);
            while(n % i == 0) {
                n = n / i;
                //console.log(n);
            }
        }
    }
    let max = arr.reduce((a,b) => Math.max(a,b));
    return max;
}

console.log(largestPrimeFactor(600851475143));

//input number

//start at 2, if n divides by 2 evenly, push 2 to array, and change the value of n to n/2
//keep dividing n by two until n wont divide evenly by two, then move to three
//repeat process for 3 and up until n is equal to one







//output prime factors of n
