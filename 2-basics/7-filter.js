//ForEach is not return the value 

// const coding = ["usman","zakir","zaid","zulqarnain"]
// const newCoding = coding.forEach( (val) =>{
//     console.log(val);
//     return val
// })
// console.log(newCoding);


//Method 1
// const newArray = [1,2,3,4,5,6,7,8,9,10]
// const oldarray = newArray.filter( (num) => num < 5);
// console.log(oldarray);

//Method 2
// const newArray1 = [1,2,3,4,5,6,7,8,9,10]
// const oldarray1 = newArray1.filter( (num) => {
//     return num > 5 
// });
// console.log(oldarray1);




const Books = [
    { titel: "Book 1", genration: "friction",publish: 2002,
      eddition: 1990 },

    { titel: "Book 2", genration: "History",publish: 2008,
      eddition: 1995 },

    { titel: "Book 3", genration: "Science",publish: 2012,
      eddition: 1999 },

    { titel: "Book 4", genration: "Non-frition",publish: 2016,
      eddition: 2000 },

    { titel: "Book 5", genration: "History",publish: 2020,
      eddition: 2007 },

    { titel: "Book 6", genration: "friction",publish: 2024,
      eddition: 2009 },
];

let newBook = Books.filter( (bk) => bk.genration === "History") 
newBook = Books.filter( (bk) =>{
    return bk.publish > 2008 && bk.genration === "friction"
} )

console.log(newBook);