
function sayMyName() {
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");

}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }
// addTwoNumbers(2, 2)

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result

}
const result = addTwoNumbers(2, 2)
// console.log("Result:", result);


function loginUserMessage(username) {
    if (!username) {
        // console.log("Please enter your username");
        return


    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1

}
// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Rohan",
    price: 999

}

function handleObject(anyobject) {
    console.log(`username is : ${anyobject.username} and price is : ${anyobject.price}`);


}

// handleObject(user)
handleObject({
    username: "sam",
    price: 200
})

const newArray = [200, 300, 100, 400]

function returnSecondValue(getArray) {

    return getArray[1]
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 400, 2000, 4000]));
