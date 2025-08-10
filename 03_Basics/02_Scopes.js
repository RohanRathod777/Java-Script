
let a = 300

if (true) {

    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER a :", a);


}
// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Rohan"
    function two() {

        const website = "google.com"
        console.log(username);

    }
    // console.log(website);
    // two()

}
// one()


if (true) {
    const username = "Rohan"
    if (username === "Rohan") {
        const website = "youtube"
        // console.log(username + website);

    }
}



//+++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++


function addOne(num) {
    return num + 1
}
console.log(addOne(5));


const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5));
