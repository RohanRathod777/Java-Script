const name = "Rohan"
const repoCount = 50

// console.log(name + repoCount + "value");
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rohanr-rr-com')


// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

//substring

const newString = gameName.substring(0, 5)
console.log(newString);

// .slice

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

// .trim

const newStringone = "   Rohan   "
console.log(newStringone);
console.log(newStringone.trim());


//.replace

const url = "https:/rohan.con/rohan%20rathod"

console.log(url.replace('%20', '-'));

console.log(url.includes('rohan'));

console.log(gameName.split('-'));


