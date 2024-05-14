// While Loop
// A while loop checks the condition before executing the code block. It will only execute the code block if the condition is true

let a = 0;
while (a < 5) {
  console.log(a);
  a++;
}




 
// Do-While Loop
// A do-while loop checks the condition after executing the code block. It will always execute the code block at least once, even if the condition is false.

// let score = 11 
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);




// let i =0;
// do
// {
//     console.log("ihsan")
//     i++
// }while(true)




    
// for of loop

//  let name = 'islamia collage university peshawar  '
// for(i of name)
// {
//    console.log(i)
// } 




//for in loop 
// let x = 'islamia collage university peshawar  '
// for(i in x)
// {
//    console.log(i)
// }



const myNum ={
  js: "javascript",
  cpp: "c++",
  AI : "Artificial intelegence"
}

for (const key in myNum) {
    console.log(`${key} full form is ${myNum[key]}`);
}