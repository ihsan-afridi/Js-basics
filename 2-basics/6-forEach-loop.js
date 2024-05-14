// let fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(fruit => {
//   console.log(fruit);
// });



// let name = ["ihsan","usman","umer","zaid"]

// name.forEach( (num) =>{
//   console.log(num);
// } )



let arr = [ 
  {
    languageName : "javascript",
    FileName : "js"
  },
  {
    languageName : "python",
    FileName : "py"
  },
  {
    languageName : "Arti-F",
    FileName : "AI"
  },
  {
    languageName : "cpp",
    FileName : "c++"
  }
]

arr.forEach( (name)=>{
  console.log(typeof arr);
  console.log(arr);
  console.log(name.languageName);
  console.log(name.FileName);
} )

//This is the Out Put
 
// object
// [
//   { languageName: 'javascript', FileName: 'js' },
//   { languageName: 'python', FileName: 'py' },
//   { languageName: 'Arti-F', FileName: 'AI' },
//   { languageName: 'cpp', FileName: 'c++' }
// ]
// javascript
// js
// object
// [
//   { languageName: 'javascript', FileName: 'js' },
//   { languageName: 'python', FileName: 'py' },
//   { languageName: 'Arti-F', FileName: 'AI' },
//   { languageName: 'cpp', FileName: 'c++' }
// ]
// python
// py
// object
// [
//   { languageName: 'javascript', FileName: 'js' },
//   { languageName: 'python', FileName: 'py' },
//   { languageName: 'Arti-F', FileName: 'AI' },
//   { languageName: 'cpp', FileName: 'c++' }
// ]
// Arti-F
// AI
// object
// [
//   { languageName: 'javascript', FileName: 'js' },
//   { languageName: 'python', FileName: 'py' },
//   { languageName: 'Arti-F', FileName: 'AI' },
//   { languageName: 'cpp', FileName: 'c++' }
// ]
// cpp
// c++

console.log(typeof function);