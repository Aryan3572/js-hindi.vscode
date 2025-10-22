let myDate = new Date()
console.log(myDate.toString());// full date string
console.log(myDate.toDateString()); // date portion only
console.log(myDate.toLocaleString("en-IN"))// date and time according to locale

console.log(typeof myDate)

let newdate = new Date(2023 , 0, 23) // specific date
console.log(newdate.toDateString()) // month in js starts fro 0

let anotherdate = new Date(2025 , 0 ,1 , 5, 30)
console.log(anotherdate.toLocaleString())

let date1 = new Date("01-14-2025")
console.log(date1.toLocaleString());

console.log(date1.getTime())

console.log(Math.floor(Date.now()/1000)) // current time in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getFullYear())
console.log(newDate.getMonth() + 1) // month start from 0 in javascript
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    timezone: "UTC"
}))