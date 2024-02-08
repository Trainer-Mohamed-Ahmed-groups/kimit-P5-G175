//*******************  Object *********************** */
// var object = {
//     key: value
// }

// Example =>

var car = {
    name: 'Mercedes',
    model: 2020,
    isSold: true
}


console.log(car)
console.log(car['name'])


// Dot notation 

console.log(car.name + " and it's model is " + car.model)

// Bracket notation
console.log(car['name'] + " and it's model is " + car['model'])

//*******************  function *********************** */


function greeting() {
    console.log("Hello")
}

greeting()

// Function with parameter

// Void function
function greeting2(x) {
    console.log("Hello " + x)
}

greeting2("Mohamed")
greeting2("Ibrahim")
greeting2("Mina")

// Function With parameters
function sum(a, b) {
    return (a + b)
}

function multi(a, b) {
    return (a * b)
}

function sub(a, b) {
    return (a - b)
}

function division(a, b) {
    return (a / b)
}

// var num_one = +prompt("Please enter number one"),
//     num_two = +prompt("Please enter number two");



// console.log(sum(num_one, num_two))
// console.log(sub(num_one, num_two))
// console.log(multi(num_one, num_two))
// console.log(division(num_one, num_two))

// Returning value function
function addNum() {
    return 1 + 1
}

console.log(addNum())


var persons = ["Mohamed", "Mina", "Ibrahim", "Ali", "Mazen",["test","test2"]];

console.log(persons)
console.log(persons.length)
console.log(persons[2])
console.log(persons[persons.length - 1])
console.log(persons[60]) //undefined
console.log(persons[5][0])

persons[6] = "Esraa"
console.log(persons)
console.log(persons[6])
console.log(persons.at(-1))