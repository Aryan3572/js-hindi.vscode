const score = 400
console.log(score)

const balance = new Number(100.5099)
console.log(balance)

console.log(balance.toString().length) // converts to strings and then gives the length
console.log(typeof balance)
console.log(balance.toFixed(2)) // rounds to 2 decimal places

const otherNumber = 123.4999
console.log(otherNumber.toPrecision(4)) // rounts to 4 significant digits

const Hundreds = 10000000
console.log(Hundreds.toLocaleString("en-IN")) // adds commas according to the locale

// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math) 
console.log(Math.abs(-4)) // absolute value
console.log(Math.round(4.6))// rounds to nearest integer
console.log(Math.ceil(4.2)) // rounds to the upper nearest integer
console.log(Math.floor(4.8)) // rounds to the lower nearest integer
console.log(Math.min(2,3,4,5,6))
console.log(Math.max(2,3,4,5,6))

console.log(Math.random()); // gives random number between 0 and 1

console.log((Math.random()*10) + 1) // gives random number between 0 and 10 and +1 shifts the range to 1 to 11 and maths.random is wraped in parenthesis to do multiplication first

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min) + min0) //gives a random number btween min and max inclusive

// formula explanation: 
// maths.random() * (max - min + 1) + min
// here max - min + 1 gives the range of numbers we want
// then multiplying it with maths.random gives a number between 0 to range
// then adding min shifts the range from 0 to range to min to max+1
// finally we do floor to round it down to nearest integer