// ARRAY

const myArr = [1, 2, 3, 4, 5, 6]

const myHeros = ["iron man ", "captain america", "thor"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr[2]);


//ARRAY METHODS


// myArr.push(10)
// myArr.pop()


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(2));


const newArray = myArr.join()

// console.log(myArr);
// console.log(newArray);
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);
