// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is my fivorate number");
//     }
//     console.log(element);
// }
// console.log(element); // ReferenceError: element is not defined


// for (let a = 0; a < 10; a++) {
//      console.log(`Outter loop value is: ${a}`);
//    for (let z = 0; z < 10; z++) {
//      console.log(`Inner loop value is:${z}`);
//      console.log(a*z);
//    }
    
// }



// let myArray = ["liala" , "maimona" , "saba"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }




//key words : break and continue

// for (let xx = 1; xx < 20; xx++) {
//     if (xx == 7) {
//         console.log("7 is come plx stop");
//         break;
//     }  console.log(`The value of xx is: ${xx}`);
    
// }


// continue

for (let xx = 1; xx < 20; xx++) {
    if (xx === 7) {
        console.log("7 is come plx stop");
        continue;
    }  console.log(`The value of xx is: ${xx}`);
    
}