//TODO - Your ES6 JavaScript code (if any) goes here
//import "bootstrap"

// ================== Assignment 6 - Scripts ==================

//getMax(x, y, z): This function takes three numbers, x, y, and z, as input and returns the largest among them.
function getMax(x, y, z) {
    return Math.max(x, y, z);
}
console.log('Test getMax');
console.log(getMax(5, 10, 15)); // test output: 15

//getMin(x, y, z): The opposite of max(x, y, z). It returns the smallest among x, y, and z.
function getMin(x, y, z) {
    return Math.min(x, y, z);
}
console.log('Test getMin');
console.log(getMin(5, 10, 15)); // test output: 5

//getMean(x, y, z): Returns the average (or mean) of the given x, y, and z numbers.
function getMean(x, y, z) {
    return (x + y + z) / 3
}
console.log('Test getMean');
console.log(getMean(5, 10, 15)); // test output: 5

// compare(word1, word2): Given two strings, word1 and word2, this function returns: 0 if word1 is the same as word2; 1 if word1 is greater than word2; and -1 if word1 is smaller than word2.
function compare(word1, word2) {
    if (word1 === word2) {
        return 0;
    } else if (word1 > word2) {
        return 1;
    } else {
        return -1;
    }
}
console.log('Test compare');
console.log(compare("hello", "world")); // test output: -1
console.log(compare("world", "hello")); // test output: 1
console.log(compare("hello", "hello"));  // test otput: 0

// getCharPerLine(str, indent): Given a string str and a boolean parameter indent, this function should return a multi-line string with each character of the string written on its own line. If the character is a space, then ignore it. If indent is true, each line should be preceded by diagonal indentation.
function getCharPerLine(str, indent) {
    let result = '';
    let indentSpace = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if (indent) {
                result += indentSpace + str[i] + '\n';
                indentSpace += ' ';
            } else {
                result += str[i] + '\n';
            }
        }
    }
    return result;
}
console.log('Test getCharPerLine');
console.log(getCharPerLine("Hello World!", false));
console.log(getCharPerLine("Hello World!", true));

// arrow(size): This function takes a number size as input and should return a multi-line string containing a right-pointing arrow made using asterisks. A combination of while and for loops must be used for this
function arrow(size) {
    let arrowString = '';

    for (let i = 1; i <= size; i++) {
        arrowString += '*'.repeat(i) + '\n';
    }
    let j = size - 1;
    while (j > 0) {
        arrowString += '*'.repeat(j) + '\n';
        j--;
    }
    return arrowString;
}
console.log('Test arrow');
console.log(arrow(3));
console.log(arrow(7));