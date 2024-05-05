 //A string is a sequence of characters enclosed in quotes (either single quotes ' ' or double quotes " ").


 //Examples

//Declaring a string variable
let myString = 'Hello, World!';
console.log(myString);


//String Method


console.log(myString.charAt(0)); //its check the number of alphabits
console.log(myString.indexOf("H"));//its check the alphbits number
console.log(myString.indexOf("h")); //the small h value is -1
console.log(myString.trim());//trim remove space
console.log(myString.includes("Hello"));//if we write wrong alphabit so its false
console.log(myString.replace("He","le"));//out put is lello
console.log(myString.substring(0,5));//out put is Hell
console.log(myString.slice(4,8));//out put is o,w
console.log(myString.repeat(2));//its repeat Hello,world
console.log(myString.endsWith("World!"));//its check the right value



//string literals:
// console.log('This is a string literal.');



// //Concatenating strings:
// let firstName = 'liala';
// let lastName = 'Afridi';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName); // Output: "laila afridi"


// //Using string methods:
// let myStrings = 'Hello, World!';
// console.log(myStrings.toUpperCase()); // Output: "HELLO, WORLD!"
// console.log(myStrings.toLowerCase()); // Output: "hello, world!"


// //Using template literals:

// let name = 'laila Afridi';
// let age = 30;
// let message = `My name is ${name} and I am ${age} years old.`;
// console.log(message); // Output: "My name is laila Afridi and I am 30 years old."
