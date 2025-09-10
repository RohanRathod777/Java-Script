const myNums = [1, 2, 3, 4,]

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator: ${accumulator} currentvalue: ${currentvalue} `);

//     return accumulator + currentvalue
// }, 0)

const myTotal = myNums.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile development course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);
