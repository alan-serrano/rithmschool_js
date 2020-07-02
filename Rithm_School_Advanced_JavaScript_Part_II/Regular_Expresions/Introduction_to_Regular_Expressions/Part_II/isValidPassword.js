/*
Write a function caled isValidPassword,
which accepts a string. If the string is
longer than 7 characters and includes at
least one special character (!,@,#, or $),
the function should return true. Otherwise, return false
*/

function isValidPassword(str) {
    const expression1 = /.{8,}/; // Longer than 7 characters
    const expression2 = /[!@#$]+/; // Includes at least one of those charecters
    return expression1.test(str) && expression2.test(str);
}

function test() {
    var results = [
        isValidPassword('TacoCat')  === false,
        isValidPassword('foo')      === false,
        isValidPassword('awesome!') === true,
        isValidPassword('win!@')    === false
    ]

    console.table(results);
}

test();