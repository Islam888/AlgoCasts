// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
    return str.split("").reverse().join(""); 
}  */
/* function reverse(str) {
    const arr = str.split("")
    let reversedArr = []
    for(i=arr.length-1; i>=0; i--) {
        reversedArr.push(arr[i])
    } 
    return reversedArr.join("");
} */

/* function reverse(str) {
    let reversedStr = '';
    for (const character of str) {
        reversedStr = character + reversedStr;
    }
    return reversedStr;
} */

function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "")
}




module.exports = reverse;
