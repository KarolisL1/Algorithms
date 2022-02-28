// Algo python day 4

function minIndex(arr, start, end) {
    var index = arr[start];
    var output = start;
    for (var i = start; i <= end; i++) {
        if (index > arr[i]) {
            index = arr[i];
            output = i;
        }

    }
    return output
}

var test_array = [9, 0, 4, 6, 4, 1, 2, -7, 8];
console.log(minIndex(test_array, 0, 7)); // should return 1 - 0 is at the first index
console.log(minIndex(test_array, 3, 6)); // should return 5 - 1 is at the fourth index
console.log(minIndex(test_array, 1, 4)); // should return 1 - 0 is still at the first index
console.log(minIndex(test_array, 2, 4));
//console.log(minIndex(test_array2, 0, 7));

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        // var minValue = arr[minIndex(arr, i, arr.length-1)];
        var x = minIndex(arr, i, arr.length);
        console.log(x);
        [arr[i], arr[x]] = [arr[x], arr[i]];
    }

}
selectionSort(test_array);
console.log(test_array); // log [-7, 0, 1, 2, 4, 4, 6, 8, 9]