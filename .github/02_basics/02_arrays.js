const marvel_heroes = ["thor", "ironman", "spiderman", "hulk"];

const dc_heroes = ["batman", "superman", "flash", "aquaman"];

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes[1][1]) // accessing spiderman from dc_heroes array which is inside marvel_heroes array

const allheroes = marvel_heroes.concat(dc_heroes) // merging two arrays
console.log(allheroes)

const alll_newheroes = [...marvel_heroes, ...dc_heroes]
console.log(alll_newheroes) 

const another_array = [1,2,3,4,[4,5,6],7,[8,9,10]] // nested array
const real_another_array = another_array.flat(2) // flattening the array
console.log(real_another_array)

console.log(Array.isArray(marvel_heroes)) // checking if variable is array or not   
console.log(Array.from("Aryan")) // converting string to array
console.log(Array.from({name: "Aryan"})) // only iterable objects can be converted to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // creating array from variables