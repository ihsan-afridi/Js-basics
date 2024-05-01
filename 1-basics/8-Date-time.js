let myDate = new Date()


// console.log(typeof myDate);//type is object
// console.log(myDate.toDateString());//out put is  "Mon Apr 29 2024"
// console.log(myDate.toString());//Mon Apr 29 2024 10:19:45 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toLocaleString());//out put is "4/29/2024, 10:20:32 AM"
// console.log(myDate.toLocaleDateString());//out put is "4/29/2024"


const myDates = new Date(2024, 0, 22)
// console.log(myDates.toDateString());//out put is "Mon Jan 22 2024"


const myDate1 = new Date(2024, 0, 22, 5, 5, 22)
// console.log(myDate1.toLocaleString());//out put is "1/22/2024, 5:05:22 AM"


const myDate2 = new Date("2023-03-22")
console.log(myDate2.toLocaleString());//output is "3/21/2023, 5:00:00 PM"