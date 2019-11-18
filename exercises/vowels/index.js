// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* function vowels(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split("").filter(char => vowelsArr.includes(char)).length
} */
/* function vowels(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (const char of str.toLowerCase()) {
        if (vowelsArr.includes(char)) {
            counter ++
        }
    }
    return counter;
} */

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
