//arrays in javascript is resizable and can hold multiple data types

const myArr = [10, 20, 30, 40, 50];
const myheros = ['spiderman', 'ironman', 'thor', 'hulk'];

console.log(myArr[0])
console.log(myArr)
console.log(typeof myArr)

const myArr2 = new Array(1,2,3,4)
console.log(myArr2)


// Array methods

myArr.push(60) //add element at the end
myArr.pop() // removes last element
console.log(myArr)

myArr.unshift(6) // add element at the beginning
console.log(myArr)

myArr.shift() // add element at the beginning
console.log(myArr)

console.log(myArr.includes(40)) // returns true if element is present else false

console.log(myArr.indexOf(20))

const newArr = myArr.join() // converts array to string
console.log(newArr)
console.log(typeof newArr)// converted array to string

//slice , splice

console.log("A",myArr)

const myn1 = myArr.slice(1,3) // does not modify original array
console.log(myn1)

console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2) // modifies original array

