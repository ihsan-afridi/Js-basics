//then mean "response rashe no .then k ba raze"
//catch mean "aw ka error we no pa catch ka ba we "
//finaly mean "pa day l tol de"

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout (() => {
//       console.log("doneee");
//       resolve()
//     },1000)
// })
// promiseOne.then(() =>{
//     console.log("its also done");
// })


// //2nd method

// new Promise((resolve, reject) => {
//     setTimeout (() => {
//       console.log("complete");
//       resolve()
//     },1000)
// }) //.then inform resolve
// .then(() =>{ 
//     console.log("its also complete");
// })



//3rd method we add sme things

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//        resolve({username:"ihsanAfridi" , password:"1234"})
//     },2000)
// })
// promiseThree.then((pass) =>{
//    console.log(pass);
// })


// 4th method


// const PromiseFour = new Promise((resolve, reject) => {
//     setTimeout(() =>{
      
//        let error = false
//        if (!error) {
//         resolve({username:"ihsanAfridi" , password:"1234"})
//        }else {
//         reject("Error went wrong") // error inform reject
//        }
//     },2000)

// })
// PromiseFour
// .then((pass) =>{
//    console.log(pass);
//    return pass.username
// })
// .then ((username) =>{ // its chaning 
//     console.log(username);
// })
// .catch((error) =>{
//     console.log(error);
// })
// .finally(() =>{
//     console.log("finaly we win");
// })


// 5th method


// const PromiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        let error = true //if we add false so js went wrong not run
//        if (!error) {
//         resolve({username:"JavaScript" , password:"1234"})
//        }else {
//         reject("Error:JS went wrong") // error inform reject
//        }
//     },1000)
// });

// async function consume() {
//    try {
//     const response = await PromiseFive
//     console.log(response);
//    } catch (error) {
//      console.log(error);
//    }
// }
// consume()



async function getAll (){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAll()



// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) =>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
