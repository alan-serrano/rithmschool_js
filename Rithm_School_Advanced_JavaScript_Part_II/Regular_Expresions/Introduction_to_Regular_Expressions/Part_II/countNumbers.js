/*
Write a function called countNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.
*/

function countNumbers(str) {
    const expression = /[0-9]/g;
    const matches = str.match(expression);
    return (matches) ? matches.length : 0;
}

function test() {
    const tests = [
        countNumbers("321321dsadsa930-29d132b13a") === 16,
        countNumbers("this is so wonderful") === 0,
        countNumbers("this is so 1234") === 4,
    ]
    console.table(tests);
}

test();