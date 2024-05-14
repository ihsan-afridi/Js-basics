const NewNum = [1,2,3,4,5]
const total = NewNum.reduce( (accumolator,currntValue) =>{
    console.log(`accom value is ${accumolator} and currnt value is ${currntValue}`);
    return accumolator + currntValue
},0)
console.log(total);



// const NewNum = [1,2,3,4,5]
// const total = NewNum.reduce( (accumolator,currntValue) =>{
//     console.log(`accom value is ${accumolator} and currnt value is ${currntValue}`);
//     return accumolator * currntValue
// },10)
// console.log(total);



const ShopingCart = [
    {
        ItemName: "AI",
        price: 2000
    },
    {
        ItemName: "python",
        price: 20000
    },
    {
        ItemName: "javascript",
        price: 25000
    },
    {
        ItemName: "java",
        price: 12000
    },
]

const Shop = ShopingCart.reduce( (item,add) =>{
    return item + add.price
},0)
console.log(Shop);
console.log(typeof reduce);