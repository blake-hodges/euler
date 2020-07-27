

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

//input: two arrays, one for the current inventory and the other the new delivery

//loop through newInv array and compare each item to the items in curInv
//if item is found in curInv, add the quantity from the delivery to the inventory
//if the delivery items aren't found in the curInv, add the item and quantity to curInv
//return curInv
//output: one array of the updated inventroy with new delivery items added

// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
//test 1
var curInv = [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]];

var newInv = [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]];


function updateInventory(arr1, arr2) {
    for (let item of arr2) {
        checkInventory(item, arr1);
    }

    return arr1.sort(compare);


    function compare(a, b) {
        if (a[1] > b[1]) return 1;
        if (b[1] > a[1]) return -1;
        return 0;
    }

    function checkInventory(item, arr) {
        let newItem = true;
        for (let i = 0; i < arr.length; i++) {
            if (item[1] == arr[i][1]) {
                newItem = false;
                arr[i][0] = item[0] + arr[i][0];
            }
        }

        if (newItem == true) {
            arr.push(item);
        }
        return arr;
    }


}



//console.log(checkInventory([2, "Hair Pin"], curInv));
console.log(updateInventory(curInv, newInv));


//updateInventory(curInv, newInv);
