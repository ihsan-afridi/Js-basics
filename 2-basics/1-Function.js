
// A function is a block of code that:
// Takes some input (called parameters)
// Does something with that input (executes some code)
// Returns some output 



// Define a function that takes two numbers as input and returns their sum
function addNumbers(a, b) {
  return a + b;
}
// Call the function and store the result in a variable
let result = addNumbers(3, 5);
console.log(result); // Output: 8



function myName(){
  console.log("A");
  console.log("F");
  console.log("R");
  console.log("I");
  console.log("D");
  console.log("I");
};
myName()




function addNewNum(minus1 , minus2){
  console.log(minus1 - minus2);
}
addNewNum(20,222) // Out put is -202




function addNewNum(plus1 , plus2 , plus3){ // this is perameters p1,p2,p3
  console.log(plus1 + plus2 +plus3);
}
addNewNum(2,'22',3) //The out put is 2223 and this is argument 2,'22',3






function login(userName){
  if(userName === undefined){
    console.log("Enter user name");
    return
  }

    return `${userName} just logged in`
}
// console.log(login('ihsan'));
console.log(login());// undefined




function calculate(num1){
  return num1
}
console.log(calculate(111,222,333,444));//Out put is 111



// 3 dots ... doing this work
function calculated(...num2){
  return num2
}
console.log(calculated(111,222,333,444));// Out put is [111,222,333,444]






const user = {
  userName: 'ihsan afridi',
  price: 200
}

function handleObject(anyobject){
  console.log(`User name is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handleObject(user)

 //we pass the object
handleObject({
   userName : "usman",
   price : 400 ,
}) 



//we pass array in funtion 

let newArray = [22,33,44,55,66,77,88,99]

function Value(justArray){
  return justArray[0,1]
}
// console.log(Value(newArray));
console.log(Value([200,300,400]));