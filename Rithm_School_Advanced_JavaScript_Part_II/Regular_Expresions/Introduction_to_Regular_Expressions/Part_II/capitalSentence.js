/*
Write a function called capitalSentence which accepts a
string and returns another string with all the capital letters
joined together.
*/

function capitalSentence(str) {

}

function test() {
    const tests = [
        capitalSentence("The Cat In The Hat") === "TCITH",
        capitalSentence("And I Think to Myself What a Wonderful World") === "AITMWWW"
    ];

    console.table(tests)
}

test();