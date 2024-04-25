// primitive Data type

// There are 7 data type : String , Number , Boolean , null , undefined , Symbol

//Number:
let age = 25;
console.log(age); // Output: 25


//String:
let name = "Ihsan Afridi";
console.log(name); // Output: "Afridi"


//Boolean:
let Admin = true;
console.log(Admin); // Output: true


//Null:
let unknown = null;
console.log(unknown); // Output: null


//Undefined:
let undefined;
console.log(undefined); // Output: undefined


//Symbol:
let symbol = Symbol("description");
console.log(symbol); // Output: Symbol(description)







// Non primitive / Reference

// Array , Object , Function

//Array:
let scores = [90, 80, 70];
console.log(scores); // Output: [90, 80, 70]


//Object:
let person = { name: "Afridi", age: 25 };
console.log(person); // Output: { name: "Afridi", age: 25 }


//Function:
let greet = function(name) {
  console.log(`Hello, ${name}!`);
};
greet("Jan"); // Output: Hello, Jan!