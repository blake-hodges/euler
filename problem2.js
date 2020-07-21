function fiboEvenSum(n) {

var total = 0;
function addIfEven(num) {
    if (num % 2 ==0) {
        total = total + num;
    }
}

var i;
var fibonacciNums = [1,2];
n = n - 3;
for (i = 0;i <= n;i++) {
    fibonacciNums[i + 2] = fibonacciNums[i] + fibonacciNums[i + 1];

}



fibonacciNums.forEach(addIfEven);
    return total;
}
