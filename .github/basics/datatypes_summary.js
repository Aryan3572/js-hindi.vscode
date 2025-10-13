// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID);
 
const bigNumber = 123456789232456543454321123456765431n



// Reference (Non-Primitive)

//Array, Objects, Functions


const heros = ["aryan","raj","doga"];
let myObj = {
    name : "aryan",
    age : 21,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof(bigNumber)); 