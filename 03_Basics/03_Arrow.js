
const user = {
    username: "Rohan",
    price: 333,
    welcomemessage: function () {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);


    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);

// function one() {
//     let username = "Rohan"
//     console.log(this.username);

// }
// one()

// const one = function () {
//     let username = "Rohan"
//     console.log(this.username);
// }

const one = () => {
    let username = "Rohan"
    console.log(this.username);
}
// one()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "Rohan" })

console.log(addTwo(5, 5))