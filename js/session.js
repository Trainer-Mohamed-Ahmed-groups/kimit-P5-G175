var arr = ["Mohamed", 1, "Hey", "no", "Front", "JS"];

let myIndex = arr.findIndex(element => element === 'no')


console.log(arr.fill("Thanks", myIndex + 1))

////////////////////////////////////////////////////

function sayOK() {
    console.log("OK")
}


// let myInterval = setInterval(sayOK, 500)


function stopOK() {
    clearInterval(myInterval)
}
/********************/
function sayNO() {
    console.log("NO")
}

let myTimeout = setTimeout(sayNO, 4000)

function stopNO() {
    clearTimeout(myTimeout)
}
/************************** Math methods ********************************/
console.log(Math)

console.log(Math.max(1, 45, 48, 451, 12, 99))
console.log(Math.min(71, 45, 48, 451, 12, 99))

console.log(Math.round(5.8))
console.log(Math.floor(5.9999))
console.log(Math.ceil(5.001))

console.log(Math.pow(3, 4)) // 3^4
console.log(Math.sqrt(81))
console.log(Math.abs(-8)) // |8|
console.log(Math.random() * 10) // random number from 0 to 1


console.log(Math.round(Math.random() * 6))


var persons = ["Ali", "Mazen", "Zaid", "Yahia", "Younes", "Eyad"];


console.log(persons)
console.log(persons[0])
console.log(persons[Math.floor(Math.random() * persons.length)])
console.log(Math.floor(Math.random() * 5))
console.log(Math.round(Math.random() * 4))

////////////////////////////////////////////////////////////
var x = 5;
console.log(x)
console.log(x.toString())


let y = 9.656;
console.log(y.toFixed(0))
console.log(y.toFixed(2))
console.log(y.toFixed(4))
console.log(y.toFixed(6))


console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.isSafeInteger(445454))

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(8 / 0)
console.log(-8 / 0)