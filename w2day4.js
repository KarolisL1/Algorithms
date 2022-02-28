// longestPalindrome(str) -> input is a string
// output is the longest palindrome contained within that string
// if you find multiple palindromes of the same length, return the first one
// that you find
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba"
// "abcde" -> "a" (every character is effectively its own palindrome)
// "a" -> "a" (lol)
// "I like to drive the racecar extremely fast" -> "e racecar e"
// "racecar" -> "racecar" (no need to use the previous function if you don't want to)

function isPalindrome(str) {
    // console.log(`testing string ${str}`);
    for (var i = 0; i < str.length/2; i++) {
        // console.log(`comparing string index ${i} to string index ${str.length - 1 - i}`);
        if (str[i] == str[str.length - 1 - i]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

function isPalindrome(str) {
    // console.log(`testing string ${str}`);
    for (var i = 0; i < str.length/2; i++) {
        // console.log(`comparing string index ${i} to string index ${str.length - 1 - i}`);
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// what are our test cases?

console.log(isPalindrome("racecar")); // return true
console.log(isPalindrome("raceecar")); // return true
console.log(isPalindrome("raceeeeeeeeeeeeecar")); // return true
console.log(isPalindrome("tacocat")); // return true
console.log(isPalindrome("race car")); // return false
console.log(isPalindrome("e racecar e")); // return true
console.log(isPalindrome("")); // return true
console.log(isPalindrome("a")); // return true
console.log(isPalindrome("123454321")); // return true
console.log(isPalindrome("1234 4321")); // return true
console.log(isPalindrome("znmz")); // return false