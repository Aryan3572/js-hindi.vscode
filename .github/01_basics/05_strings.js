const name = "aryan"
const repocount = 40

console.log(name + repocount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('hiteshhhc')

console.log(gameName[0]);

console.log(gameName.__proto__)

console.log(gameName.length) 

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0,4)
console.log(newstring) // cannot start from negative index

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring) // can start from negative index

const newstring2 = "       aryan            "
console.log(newstring2);
console.log(newstring2.trim());// trims the exta spaces 

const url = "www.google.com/search"

console.log(url.replace('google','facebook')) //replaces google to facebook

console.log(url.includes('google')) // does my url contains google

console.log(url.split('/')) // splits the string at / and returns an array




