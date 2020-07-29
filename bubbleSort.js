let testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
let test2 = [1,2,3,4,5,6];

function bubbleSort(arr) {
    while (isSorted(arr) == false) {
        reorder(arr);
    }
    return arr;

    function isSorted(arr) {
        let result = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                result = false;
            }
        }
        return result;
    }

    function reorder(arr) {
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let b = arr[i + 1]
            if (arr[i] > arr[i + 1]) {
                arr[i] = b;
                arr[i + 1] = a;
            }
        }
        return arr;
    }
}






console.log(bubbleSort(testArr));
