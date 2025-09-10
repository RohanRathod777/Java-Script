// For of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);

}

const greetings = "Helllo World !"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);

}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")

// console.log(map);

for (const [key, Value] of map) {

    console.log(key, ':-', Value);

}


