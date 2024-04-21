// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const
// In this first example, x, y, and z are undeclared variables.

// They are automatically declared when first used:


//Automatically
x = 5;
y = 6;
z = x + y;
console.log(z);


//We change the Var value
//Var is not block scope var is working globaly
//prefer not to use Var
//Because of issue in block scope and function scope
var x = 5;
var y = 6;
var z = x * y;
console.log(z);


//let is a block scope
//let is working in range
//we change also the let value
let a = 5;
let b = 6;
let c = a - b;

console.log(c);


//const is also block scope
//const value is never change

const afridi = 5;
const f = 6;
const g = afridi ** f;
console.log(g);


console.log(afridi);
