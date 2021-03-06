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
// SYNTAX: string.indexOf(value)
var res = str.indexOf("WORLD")
// Expected: 6
// "H E L L O   W O R L D"
//              |
//  0 1 2 3 4 5 6 7 8 9 10
// always count " " as character

// lastIndexOf()
// return the position of the last occurrence of a specified value in a string
// This method return -1 if the value to search for never occurs
// SYNTAX: string.lastIndexOf(value)
var res = str.lastIndexOf("WORLD")
// Expected: 6

// length
// return length of the string
var res = str.length
// Expected: 11

// match()
// method searches a string for a match against a regular expression, and returns the matches, as an Array object
// SYNTAX: string.match(value // regular expression)
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
// Expected: "ain", "ain", "ain"
// The rain in SPAIN stays mainly in the plain
//      ain                 ain            ain
// the letter must match upper and lower case

// prototype
// The prototype property allows you to add new properties and methods to existing object types.
function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
}
employee.prototype.salary = 2000;

var fred = new employee("Fred Flintstone", "Caveman", 1970);
fred.salary
// Expect: 2000
// employee {name: "Fred Flintstone", jobtitle: "Caveman", born: 1970}
// name: "Fred Flintstone"
// jobtitle: "Caveman"
// born: 1970
// __proto__:
// salary: 2000   <====== 
// constructor: ƒ employee(name, jobtitle, born)
// __proto__: Object

// repeat()
// returns a new string with a specified number of copies of the string it was called on
// SYNTAX: string.repeat(numberOfTimes)
str.repeat(2)
// Expected: HELLO WORLDHELLO WORLD

// replace()
// search a string for a specified value, or a regualr expression, and returns a new string where the scpecified values are replaced.
// SYNTAX: string.replace(searchValue, newValue)
var res = str.replace("WORLD", "ME");
// Expected: HELLO ME

// search()
// search a string for specified value, and returns the position of the match
// SYNTAX: string.search(searchValue)
var res = str.search("ELLO")
// Expected: 1
// H E L L O   W O R L D
//   |
// 0 1 2 3 4 5 6 7 8 9 10

// slice()
// extracts parts of a string and returns the extracted parts in a new string
// SYNTAX: string.slice(start, end)
var res = str.slice(0, 5)
// Expected: "HELLO "

// split()
// method is used to split a string into an array of substrings, and returns the new array
// SYNTAX: string.split(seperator, limit)
var res = str.split(" ")
// Expected: HELLO,WORLD

// startsWith()
// method determines whether a string begins with the characters of a specified string
// return true false
// This medthod returns true if the stirng begins with the characters, and false if not
var res = str.startsWith("HELLO")
// Expected: true
var res = str.startsWith("HI")
// Expected: false

// substr()
// method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
// SYNTAX: string.substr(start, length)
var res = str.substr(1, 4)
// Expected: ELLO
// H E L L O   W O R L D
//   | | | |
// 0 1 2 3 4 5 6 7 8 9 10

// substring()
// method extracts the characters from a string, between two specified indices, and returns the new sub string.
// This method extracts the characters in a string between "start" and "end", not including "end" itself.
// If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
// If either "start" or "end" is less than 0, it is treated as if it were 0.
// SYNTAX: string.substring(start, end)
var res = str.substring(1, 4);
// Expected: ELL


// toLowerCase()
// converts a string to lowercase letters.
// SYNTAX: string.toLowerCase()
var res = str.toLowerCase()
// Expected: "hello world"

// toString()
// returns the value of a string object
// SYNTAX: string.toString()
var res = str.toString()
// Expected: hello world

// toUpperCase()
// converts a string to uppercase letters
// SYNTAX: string.toUpperCase()
var str = "hello world"
var res = str.toUpperCase()
// Expected: "HELLO WORLD"

// trim()
// removes whitespace from both sides of a string
// SYNTAX: string.trim()
var str = "       Hello World!        ";
alert(str.trim());
// Expected: "Hello World"