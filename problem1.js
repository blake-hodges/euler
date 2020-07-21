function multiplesOf3and5(number) {
    //increment var
    var i;
    //var for sum of multiples of 3 and 5
    var total = 0;
    //loop through numbers from 1 to input number
    for (i = 1;i < number;i++) {
        //check if 3 is a multiple of "i"
        if (i % 3 === 0) {
            console.log("3 is a multiple of " + i)
            //add "i" to the total
            total = total + i;
        //check if 5 is a multiple of "i"
        } else if (i % 5 === 0) {
            console.log("5 is a multiple of " + i);
            //add "i" to the total
            total = total + i
        }
    }
    //return total after loop has finished
    return total;
}

console.log(multiplesOf3and5(19564));
