// Premitive data types

// 7 Types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100    //==> String 
const scoreValue = 100.3   //==> Number 
const isLogedIn = false    //==> Boolean 
const outsideTemp = null    //==> null 

let userEmail;      //==> Undefined 

const id = Symbol('123')  //==> Symbol 
const anotherId = Symbol('123')  //==> Symbol 

console.log(id === anotherId);

const bigNumber = 1241491144949494033n  //==> BigInt 



// Reference(Non Premitive) Data types

// Array, Object, Functions

const heros = ["Shaktiman", "Ironman", "Captain America"];  //==> Array

let myObj = {
    name: "Rohan",        //==> Object
    age: 22
}

const myFunction = function () {
    console.log("Hello world");       //==> Function

}

console.log(typeof outsideTemp);
