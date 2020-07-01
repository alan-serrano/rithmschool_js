/*
Write a function called capitalSentence which accepts a
string and returns another string with all the capital letters
joined together.
*/

function capitalSentence(str) {
    const expression = /[A-Z]/g;
    const matches = str.match(expression);

    return (matches) ? matches.join('') : '';
}

function test() {
    const tests = [
        capitalSentence("The Cat In The Hat") === "TCITH",
        capitalSentence("And I Think to Myself What a Wonderful World") === "AITMWWW"
    ];

    console.table(tests)
}

test();