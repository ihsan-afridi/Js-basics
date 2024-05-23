/*In javascript ,conversion mean changing the format or type of a value, 
 to another format or type .here are some examples
 
 1 Changing a text string ("123")to a number (123)
 2 Changing a text string ("true")to a boolean value(true)



let stringValue = 123;
let marks = "123" ;
let num = parseInt(stringValue)
console.log(typeof marks);// Out put is string 
console.log(typeof parseInt); //Out put is function
console.log(typeof stringValue); //Out put is number



let score = 122
let valueInNumber = String(score)
   console.log(typeof (score));// Out put is number
 console.log(typeof valueInNumber);//Out put is string because we convert the number to string



let score1 =  '122aaa' 
let valueInNumber1 = Number(score1)
console.log(typeof (score1)); // Out put is string
console.log(typeof valueInNumber1);//Out put is number because we convert the string to number
console.log(valueInNumber1);//out put is NaN because aaa is not a number 



let logged = "afridi"
let loggedIn = Boolean(logged)
console.log(loggedIn);



 22abc => NaN
 1 => true;
 0 =>  false;
 "" => false;
 "Afridi" => true */

 
let score = 122
let valueInNumber = String(score)
   console.log(typeof (score));// Out put is number
 console.log(typeof valueInNumber);//Out put is string because we convert the number to string
  