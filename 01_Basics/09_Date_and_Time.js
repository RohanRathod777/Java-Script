let myDate = new Date()

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());

// console.log(typeof (myDate));

// let myCreatedDate = new Date(2003, 5, 7 )
// let myCreatedDate = new Date(2003, 5, 7, 4, 3)
// let myCreatedDate = new Date("2003-06-7")
let myCreatedDate = new Date("06-7-2003")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))






