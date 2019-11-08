// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* function steps(n) {
    let steps = ''   
    for (var i = n; i > 0; i--) {
        let spaces = ''
        for (var s = i-1; s > 0 ; s--) {
            spaces += ' '
        }
        
        steps += '#'
        console.log(steps + spaces)
    }
} */

/* function steps(n) {
    for (let row = 0; row < n; row++) {
        let stairs = '';
        for (let column = 0; column < n; column ++) {
            if (column <= row) {
                stairs += '#';
            } else {
                stairs += ' ';
            }
        }
        console.log(stairs)
    }
} */

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (stair.length === n) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair)
}

module.exports = steps;
