// const userEmail = "Rohan@gmail.com"

const userEmail = []

if (userEmail) {
    // console.log("Got User Email");


} else {
    // console.log("Don't Have User Email");

}


// FALSY VALUES ==> false, 0, -0, BigInt 0n, "", null, undefined, NaN,


// TRUTHY VALUES ==> "0", 'false', " ", [], {}, function(){},


if (userEmail.length === 0) {
    // console.log("Array is empty");

}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");


}

// Nullish coalescing operator (??) : null undefined

let Val1;

// Val1 = 5 ?? 10
// Val1 = null ?? 10
// Val1 = undefined ?? 15
Val1 = null ?? 10 ?? 15

console.log(Val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");



