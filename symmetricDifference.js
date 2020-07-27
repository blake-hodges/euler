// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(args) {
    let finalArr = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        finalArr = symmetricDifference(finalArr, arguments[i]);
    }




    return removeDuplicates(finalArr.sort());

    function symmetricDifference(a,b) {
        let newArr = [];
        for (let i = 0; i < a.length; i++) {
            let result = true;
            for (let x = 0; x < b.length; x++) {
                //console.log(a[i] + ":" + b[x]);
                if (a[i] == b[x]) {
                    result = false;
                }
            }
            if (result == true) {
                newArr.push(a[i]);
            }
        }
        for (let i = 0; i < b.length; i++) {
            let result = true;
            for (let x = 0; x < a.length; x++) {
                if (b[i] == a[x]) {
                    result = false;
                }
            }
            if (result == true) {
                newArr.push(b[i]);
            }
        }
        return newArr;
    }

    function removeDuplicates(arr) {
      return arr.filter((a, b) => arr.indexOf(a) === b)
    };


}








console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));

//console.log(symmetricDifference([1, 2, 5], [2, 3, 5]));
