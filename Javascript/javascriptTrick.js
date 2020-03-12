// Random integers
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

// Array numeric sort
var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => { return a - b })
// Expected 100,40,25,10,5,1

// Sort Object
var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
]
cars.sort((a, b) => { return a.year - b.year })
// Expected 
// Saab 2001
// BMW 2010
// Volvo 2016

// if else condition
// variablename = (condition) ? value1:value2 
var voteable = (age < 18) ? "Too young" : "Old enough";