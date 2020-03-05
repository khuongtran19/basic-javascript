Math.random()
// return a random number between 0 and 1
// if you want to get number more than 1 but less than 10. Trick is Math.random() * 10
// depend on the range of the number you want to show like range from 0 to 500
// use Math.random() * "last number of the range you want"

Math.PI
// always return pi number
// Expect returns 3.141592653589793

Math.round()
// return the value of x rounded to its nearest integer
// SYNTAX: Math.round(x)
// Example Math.round(4.7)
// Expect 5
// Example Math.round(4.2)
// Expect 4

Math.pow()
// return the value of x to the power of y
// SYNTAX: Math.pow(x, y)
// Example Math.pow(8, 2)
// Expect 64 as 8^2 = 64

Math.sqrt()
// return the square root of x
// SYNTAX: Math.sqrt(x)
// Example Math.sqrt(64)
// Expect 8 as sqrt 64 is 8

Math.abs()
// return the absolute positive value of x
// SYNTAX: Math.abs(-x)
// Example Math.abbs(-4.7)
// Expect 4.7

Math.ceil()
// return the value of x rounded UP to its nearest integer
// SYNTAX: Math.ceil(x)
// Example: Math.ceil(4.4)
// Expect 5

Math.floor()
// return the value of x rounded DOWN to its nearest integer
// SYNTAX: Math.floor(x)
// Example: Math.ceil(4.7)
// Expect 4

Math.max()
Math.min()
// can be used to find the highest or lowest value in a list of arguments
// Example: Math.min(0, 150, 30, 20, -8, -200);
// Expect -200
// Example: Math.max(0, 150, 30, 20, -8, -200);
// Expect 150

// TRICK TO USE IN CODING CHALLENGE OR REAL WORLD PROJECT
// Random integers
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10