// if (true){
//   let a = 10  //  ReferenceError: a is not defined because let is not working globaly its work in Scope{}
//   const b = 20 //  ReferenceError: b is not defined because const is also not working globaly its work Scope{}
//   var c = 30 // out put is 30 because var is working globaly 
// }
//  console.log(a);
//  console.log(d);
//  console.log(c);



// let declares a variable that can be reassigned.
// It has block scope, meaning it is only accessible within the block it is declared in (e.g., inside an if statement or a for loop).
// let variables are redeclarable

// let name = 'Ihsan';
// console.log(name); // Output: Ihsan

// name = 'Afridi';
// console.log(name); // Output: Afridi



// const declares a constant variable that cannot be reassigned.
// It also has block scope, just like let.
// const variables are not redeclarable.

// const PI = 3.14;
// console.log(PI); // Output: 3.14

// PI = 2.71; // Trying to reassign a value to PI will result in an error




// function one(){
//     const userName = "ihsan"

//     function two(){
//         const website = "youtube"
//         console.log(userName);
//     } 
//     console.log(website);
//     two()
// } 

// one()



//+++++++++++++++++++++++++++++//

// console.log(addOne(5));

function addOne(num){
    return num + 1
}




// +++++++++//

 //TypeError: addtwo is not a function
 console.log(addtwo(22));
var addtwo = function(num){
    return num + 2
   
}





// //===================//
//  ReferenceError: Cannot access 'addtwo' before initialization

// const addtwo = function(num){
//     return num + 2
   
// }
// console.log(addtwo(22)); 