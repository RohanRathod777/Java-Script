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