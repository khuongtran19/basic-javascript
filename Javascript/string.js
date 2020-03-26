var str = "HELLO WORLD"

// charAt()
// return the character at the specified index in a string
// only return character does not effect the original string
// SYNTAX: string.charAt(index)
var res = str.charAt(0);
// Expected: "H"

// concat()
// used to join two or more string
// SYNTAX: string.concat(string1, string2, ...)
var res = str.concat(" My name is Kevin")
// Expected: "HELLO WORLD My name is Kevin"

// indexOf()
// return the position of the first occurrence of a specified value in a string
// this method return -1 if the value to search for never occurs
var res = str.indexOf("WORLD")
// Expected: 6
// "H E L L O   W O R L D"
//              |
//  0 1 2 3 4 5 6 7 8 9 10
// always count " " as character

// lastIndexOf()
// return the position of the last occurrence of a specified value in a string
// This method return -1 if the value to search for never occurs
var res = str.lastIndexOf("WORLD")
// Expected: 6

// length
// return length of the string
var res = str.length
// Expected: 11

// match()
// method searches a string for a match against a regular expression, and returns the matches, as an Array object
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
// Expected: "ain", "ain", "ain"
// The rain in SPAIN stays mainly in the plain
//      ain                 ain            ain
// the letter must match upper and lower case

