// Rotate Array
// two arguments - an array to rotate (arr) and the number of units right
// to rotate it by (shiftBy)
// ([1, 2, 3, 4, 5], 1) results in [5, 1, 2, 3, 4]
// ([1, 2, 3, 4, 5], 2) results in [4, 5, 1, 2, 3]
// ([1, 2, 3, 4, 5], 6) results in [5, 1, 2, 3, 4]

// .pop(), .shift(), .splice() - don't use these

// FIRST: discuss the problem and make sure the group understands what
// you're expecting - write some psuedocode, diagram it out
// THEN: write out and test your function; come up with your own test cases
// FINALLY: can your function handle a negative shiftBy argument?
// what if you give it a shiftBy in the millions?
// is your code clear and easily readable? is it formatted well?

function rotateArr(arr, shiftBy) {
    // your code here
    var temp = arr[arr.length-1];
    
    for (var i = 0; i < arr.length - 2; i++) {
        arr[i] = arr[i + shiftBy];
    }
arr[0] = temp;
return arr;
}

console.log(rotateArr(['hello', 'good morning', 'hey', 'how goes it', 'Guten Tag'], 1));
// should print out ['how goes it', 'Guten Tag', 'hello', 'good morning', 'hey']