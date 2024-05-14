
let prompt = require('prompt-sync')();
// console.log(Math.pow(2,5));


// console.log(Math.sin(5));

// console.log(Math.PI);

// let cos = Math.cos(0);

// console.log(cos)

// console.log(Math.sqrt(49))


// let rendomNumbers = Math.floor(Math.random()*100);

// console.log(rendomNumbers);

// const randomValues = Array(100).fill(0).map(() => Math.floor(Math.random()*100));

// console.log(randomValues.length);


// for (let i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random()*100));
//   }


let game = ['rock', 'secer', 'paper'];

let computerValue = Math.floor(Math.random()*3);

let userValue = prompt('Enter your value...')

if(userValue == game[computerValue])
    {
        console.log('your chose was '+userValue +' and computer chose was '+game[computerValue]+' toe please tey again.')
    }
    else if(userValue =='rock' && game[computerValue] == 'secer')
        {
            console.log('your chose was '+userValue +' and computer chose was '+game[computerValue]+' User win the match')
        }
        else if(userValue=='paper' && game[computerValue]=='secer'){
            console.log('your chose was '+userValue +' and computer chose was '+game[computerValue]+' computer win the match')
        }
        else if(userValue=='secer' && game[computerValue]=='paper')
            {
                console.log('your chose was '+userValue +' and computer chose was '+game[computerValue]+' user win the match')
            }