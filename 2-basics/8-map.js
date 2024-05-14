//The map method addded number

const Num = [1,2,3,4,5,6,7,8,9,10]
// const NewNum = Num.map( (add) => {return add + 1} )
   const NewNum = Num
   // da chy kala multiply she aga na bad ba plus+ k ge 

    .map( (add) => {return add * 5} )
    .map( (add) => {return add + 2} )
    .map( (add) => {return add + 1} )
    .filter((add) => add >= 33)
console.log(NewNum);