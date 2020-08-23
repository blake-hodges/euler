const testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function selectionSort(array) {
    for (let i = 0;i < array.length;i++) {
        let arrSegment = array.slice(i,array.length);
        let minVal = arrSegment.reduce(findMin));
        let x = 
    }
}

//select minimum value in a list
//swap with the first value in the list
//start at next value and select the min value in the remaining list and swap with that value

//console.log(selectionSort(testArr));

function findMin(a, b) {
    if (a >= b) {
        return b;
    } else if (b > a) {
        return a;
    }

}

//console.log(testArr.reduce(findMin));

console.log(selectionSort(testArr));
