
const mysym = Symbol("key 1")

const jsUser = {
    name: "Rohan",
    "full name": "Rohan Rathod",
    [mysym]: "key 1",
    age: 22,
    email: "Rohan@gmail.com",
    location: "Umarkheda",
    islogedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.email = "Rohan@google.com"
// Object.freeze(jsUser) 
jsUser.email = "Rohan@chatgpt.com"
console.log(jsUser);


jsUser.greeting = function () {

    console.log("Hello js user");

}

console.log(jsUser.greeting());

jsUser.greetingTwo = function () {

    console.log(`Hello js user,${this.name}`);

}

console.log(jsUser.greetingTwo());




