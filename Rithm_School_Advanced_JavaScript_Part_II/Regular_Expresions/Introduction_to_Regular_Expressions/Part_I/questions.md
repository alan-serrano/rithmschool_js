# Exercises Part I of "Introduction to Regular Expressions"
## Answer the following questions:

* __What is a regular expression? What are some use cases of regular expressions?__
    
    A regular expression is a sequence of characters that create a pattern. We can use regular expressions to search for and find these patterns in strings, which enables us to perform complex pattern-matching on strings.

    Regular expressions are commonly used to validate emails, phone numbers, zip codes, passwords, and much more. They are also used to find or replace characters in text files, which makes knowing them very helpful.
* __What are the two ways to create regular expression in JavaScript?__
    
    __Literal Method:__ One way to create a regular expression is the literal to place the pattern between two forward slashes <span style="color: #c7254e">//</span>:

    ```js
    var pattern = /a/g
    ```
    __Constructor:__ The second way to create a regular expression is by using the RegExp constructor
    ```js
    var pattern = new RegExp('a', 'g').
    ```
    This function accepts as its first parameter the pattern (what goes inside the //) and as a second parameter, a string of all the flags we want to pass in.

* __What is a flag?__

    Flags change the way the pattern match the string. In any regular expression, we can use the following flags:
    
    >__g:__ matches the pattern multiple times
    >
    >__i:__ makes the regex case insensitive
    >
    >__m:__ enables multi-line mode. Where ^ and $ match the start and end of the entire string. Without this, multi-line strings match the beginning and end of each line.
    >
    >__u:__ enables support for unicode
    >
    >__s:__ short for single line, it causes the . to also match new line characters

* __What is the difference between ?, + *?__

    __?__ - This matches at most 1 of the previous match. In other words, it marks the previous the previous match as optional.<br>
    __+__ - This matches one or more of the previous match. <br>
    __*__ - This matches zero or more of the previous match.

* __What is the difference between [] and {}?__

    __[ ] or Character Sets__ - We use character sets to match different characters in a single position. They match any single character in the string with the characters inside the brackets: <br>
    __{ } or Character Ranges__ - When we want a specific quantity of characters we can use the 'character range' which is denoted by {}. 


* __What does the search function do?__

    The __search__ function in JavaScript can accept as its first parameter either a string or a regular expression. Similar to indexOf, the search function will return the first starting point of where a match is found or -1 if a match is not found.

* __What do the exec and test functions do (these functions exist on the RegExp prototype)?__

    ### RegExp.prototype.test()
    We use this method to test whether a match has been found or not. It accepts a string which we test against a regular expression and returns either true or false, depending if the match is found or not.

    Let’s see an example:

    ```js
    var regex = /hello/; 
    var str = 'hello world';
    var result = regex.test(str);
    console.log(result); // returns 'true' as hello is present in our string
    ```

    ### RegExp.prototype.exec()

    We use this method to receive an array of all the matched groups. It accepts a string that we test against our regular expression.

    An example:

    ```js
    var regex = /hello/;
    var str = 'hello world';
    var result = regex.exec(str);
    console.log(result);
    // returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]
    ```
    In this example, __hello__ is our matched pattern, __index__ is where the regular expression starts & input is the string that was passed.