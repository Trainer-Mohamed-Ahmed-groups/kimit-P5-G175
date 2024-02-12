var person = {
    name: "Ali",
    age: 30,
    gender: "male",
    calcAgeInDays: function () {
        return person.age * 365;
    }
}

console.log(person.age)
console.log(person.calcAgeInDays())

function sayHello(name = "Not person") {
    console.log("Hello " + name)
}

sayHello("Mohamed")
sayHello("Ali")
sayHello()

function calcAge(x) { return 2024 - x }


function calcDays(x) { return 365 * x }

// var username = prompt("Please enter your name "),
//     userBirth = +prompt("Please enter your age"),
//     age = calcAge(userBirth),
//     ageInDays = calcDays(age);


// console.log(username)
// console.log(userBirth)
// console.log(age)
// console.log("Hello " + username + " your age is " + age + " and your age in days is " + ageInDays)

var x = 10;

if (x > 0) {
    console.log("Positive")
    if (5 > 0) { console.log("OK") }
}
else if (x < 0) {
    console.log("Negative")
}
else {
    console.log("ZERO")
}
console.log("********************")


if (x = 5) {
    console.log("I am five")
}
else {
    console.log("Not five")
}


var y = 5;

console.log(++y)

console.log(--y)

console.log(y)

// Rana    6 4 5
// Bavley  undefined undefined 5
// Mina    6 5 5
// Ibrahim 6 5 5 
// Esraa   6 4 5
// Mazen   6 5 5 

// Mohamed  5 6 5

var z = 10;

console.log(z++)
console.log(z)
console.log(--z)
console.log(--z)
console.log(z--)
console.log(z++)
console.log(++z)

// Esraa    10 11 10 9 9 8 10
// Mina     10 11 10 9 9 9 10
// Rana     10 11 10 9 9 8 10
// Mazen    10 11 10 9 9 9 10
// Ibrahim  10 11 10 9 9 8 10
// Bavley   10 11 10 9 9 8 10
//          10 11 10 9 9 8 10 

console.log(12 % 3)



console.log(15 % 2)


var t = "5";

if (t !== 5) {
    console.log("OK")
}
else {
    console.log("NO")
}

var userInput = +prompt("Please enter your number")

if (userInput % 2 === 0) {
    console.log("This is even number")
}
else {
    console.log("This is odd number")
}

var testOne = +prompt("Enter one")
var testTwo = +prompt("Enter one")

console.log(testOne % testTwo)