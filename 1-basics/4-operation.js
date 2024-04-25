// In JavaScript, an operation is an action performed on one or more values, variables, or expressions. Here are some examples of simple operations in JavaScript:


// Arithmetic Operations

// let a = 2 + 2
// let b = 4 - 2
// let c = 3 * 3
// let d = 6 / 2
// let e = 7 % 2
// let f = 3 ** 4
// console.log(a,b,c,d,e,f);



// **********************//
//***********************//

//Assignment operation

//Add and Assign
let x = 5;
x += 9; // add 9 to the value of x and assign the result back to x
console.log(x); // outputs 14


//Subtract and Assign

let y = 50;
y -= 2; // subtract 2 from the value of y and assign the result back to y
console.log(y); // outputs 48


// //Multiply and Assign
let z = 55;
z *= 2; // multiply the value of z by 2 and assign the result back to z
console.log(z); // outputs 110


// //Divide and Assign

let q = 60;
q /= 2; // divide the value of q by 2 and assign the result back to q
console.log(q); // outputs 30


// //Modulus and Assign (remainder)

let k = 70;
k %= 2; // find the remainder of k divided by 2 and assign the result back to k
console.log(k); // outputs 0


///////////////////////////////

// Comparison data type

// Equality Comparison
// == (Loose Equality):
// Numbers: checks value
// Strings: checks value (case-sensitive)
// Booleans: checks value
// Objects: checks reference (not value)


// === (Strict Equality):
// Numbers: checks value and type
// Strings: checks value and type (case-sensitive)
// Booleans: checks value and type
// Objects: checks value and type (including properties and prototype)


// Inequality Comparison
// != (Loose Inequality):
// Numbers: checks value (opposite of ==)
// Strings: checks value (opposite of ==)
// Booleans: checks value (opposite of ==)
// Objects: checks reference (opposite of ==)


// !== (Strict Inequality):
// Numbers: checks value and type (opposite of ===)
// Strings: checks value and type (opposite of ===)
// Booleans: checks value and type (opposite of ===)
// Objects: checks value and type (opposite of ===)


// Relational Comparison
// > (Greater Than):
// Numbers: checks value
// Strings: checks lexicographic order (alphabetical)



// < (Less Than):
// Numbers: checks value
// Strings: checks lexicographic order (alphabetical)



// >= (Greater Than or Equal To):
// Numbers: checks value
// Strings: checks lexicographic order (alphabetical)


// <= (Less Than or Equal To):
// Numbers: checks value
// Strings: checks lexicographic order (alphabetical)



// Equality Comparison

// Loose Equality (==)
console.log(5 == 5); // true
console.log('5' == 5); // true
console.log(true == 1); // true
console.log({} == {}); // false (different objects)

// Strict Equality (===)
console.log(5 === 5); // true
console.log('5' === 5); // false (different types)
console.log(true === 1); // false (different types)
console.log({} === {}); // false (different objects)


//Inequality Comparison

// Loose Inequality (!=)
console.log(5 != 5); // false
console.log('5' != 5); // false
console.log(true != 1); // false
console.log({} != {}); // true (different objects)

// Strict Inequality (!==)
console.log(5 !== 5); // false
console.log('5' !== 5); // true (different types)
console.log(true !== 1); // true (different types)
console.log({} !== {}); // true (different objects)


//Relational Comparison

// Greater Than (>)
console.log(5 > 3); // true
console.log('apple' > 'banana'); // false (lexicographic order)

// Less Than (<)
console.log(5 < 3); // false
console.log('apple' < 'banana'); // true (lexicographic order)

// Greater Than or Equal To (>=)
console.log(5 >= 5); // true
console.log('apple' >= 'apple'); // true (lexicographic order)

// Less Than or Equal To (<=)
console.log(5 <= 5); // true
console.log('apple' <= 'apple'); // true (lexicographic order)