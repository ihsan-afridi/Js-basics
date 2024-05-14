let prompt = require("prompt-sync")();

let userName = Number(prompt('Enter your Markes Plaase...'));

if (userName > 100 && userName < 50) {
    console.log("yow pass");
}
else if (userName < 70){
    console.log("you loss");
}
else if (userName < 40){
    console.log("you are not allowed");
} 
else{
    console.log("error");
}