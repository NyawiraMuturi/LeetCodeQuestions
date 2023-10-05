// Given an integer x, return true if x is a palindrome and false otherwise.

var isPalindrome = function(x) {
    const str = x.toString()
    const reverseString = str.split('').reverse().join('')

    if(str === reverseString){
        return true
    } else {
        return false
    }
};

