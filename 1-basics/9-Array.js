//what is array?

// An array is a collection of values of the same type stored in a single variable. Think of it like a container that can hold multiple values in a row.




let myArray = [1, 2, 3, 4, 5,];
//let newArray = [];

// Accessing Elements
//console.log(myArray[4]); // Output: 


// Modifying Elements
//myArray[0] = 10;
//console.log(myArray); // 


// Array Properties
// console.log(myArray.length); // its check the length of array its 5 elements


// Adding Elements
// myArray.push(6, 7, 8);
// console.log(myArray); // its add a new element Output is [1,2,3,4,5,6,7,8]



// myArray.unshift(1,1,1,1,1,1,1,1,1,1,1);// Add one or more elements to the start of the array.i mean its add array in start
// console.log(myArray); // out put is [1,1,1,1,1,1,1,1,1,1,2,3,4,5]



// myArray.splice(2);// if myArray is [1, 2, 3, 4, 5,], then myArray.splice(2) will result in myArray becoming [1, 2, ]
// console.log(myArray); // out put is [ 1, 2 ]



// // Removing Elements
// myArray.pop();
// console.log(myArray); // Remove the last element from the array



// myArray.shift();
// console.log(myArray); // Remove the first element from the array



// // Searching Elements
//console.log(myArray.indexOf(1)); // The position of 1 is 0


// console.log(myArray.includes(10)); //false
// console.log(myArray.includes(3)); //true


//  Joining Elements

// console.log(myArray.join('  ')); //join() is a handy method for converting an array into a single string, with optional separation between elements.
// console.log(myArray.join('-'));// out put is 1-2-3-4-5
// console.log(myArray.join(','));// out put is 1,2,3,4,5


// // Reversing Elements
// myArray.reverse();
// console.log(myArray); //out put is [ 5, 4, 3, 2, 1 ] reverse



// // Sorting Elements
// let myArray1 = ['b','c','d','a','e']; //out put is [ 'a', 'b', 'c', 'd', 'e' ]
// myArray1.sort();
// console.log(myArray1); // sort() is a method that sorts the elements of an array in place, meaning it modifies the original array.

// let arr = [3,4,6,5,2,1,7]
// arr.sort();
// console.log(arr);//out is [1,2,3,4,5,6,7]




// // Concatenating Arrays
// let myArr = [1,2,3]
// let myArray2 = [4,5,6] 
// let myArray3 = myArr.concat(myArray2);
// console.log(myArray3); //out put  is [ 1, 2, 3, 4, 5, 6 ] its combine tow array and make one array but its not orignal



//  Slicing Arrayss
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const subset = fruits.slice(1, 4);
// console.log(subset); // Output: ['banana', 'cherry' , 'date']


// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
// colors.splice(3,4);
// console.log(colors); // Output [ 'red', 'green', 'blue' ]


// // // Filling Arrays
myArray.fill(0, 2, 5);
console.log(myArray); 

// // Checking Arrays
// console.log(Array.isArray(myArray)); // Output: true


//flat
// const arrr = [1,2,3,4,5,6,[7,8,9],[10,11,12,13]]
// const arr = arrr.flat(Infinity)
// console.log(arr); //Its make in a sequnce OUT PUT IS [1,2,3,4,5,6,7,8,9,10,11,12,13]


//Not understand

console.log(myArray.find(x => x > 5));
console.log(myArray.findIndex(x => x > 6)); 

// // Iterating Elements
// myArray.forEach(x => console.log(x)); // Output: each element in the array

// let double = myArray.map(x => x * 2);
// console.log(double); // Output: 

// let even = myArray.filter(x => x % 2 === 0);
// console.log(even); // Output: [-2, 0, 10, 2, 4, 6]

let sum = myArray.reduce((a, b) => a + b, 0);
console.log(sum); // Output: 41


  