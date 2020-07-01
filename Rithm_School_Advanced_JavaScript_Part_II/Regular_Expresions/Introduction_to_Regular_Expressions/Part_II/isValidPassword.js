/*
Write a function caled isValidPassword,
which accepts a string. If the string is
longer than 7 characters and includes at
least one special character (!,@,#, or $),
the function should return true. Otherwise, return false
*/

function isValidPassword(str) {

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