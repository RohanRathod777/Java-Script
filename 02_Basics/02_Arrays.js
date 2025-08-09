const marvel_heros = ["ironman", "spiderman", "captian america"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("ROHAN"));
console.log(Array.from("ROHAN"));
console.log(Array.from({ name: "ROHAN" }));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





