"use strict";
var x = 5;
var y = 10
try {
    console.log(y)
} catch (error) {
    console.error("Special error : " + error.message)
}
finally {
    console.log("Finished")
}

console.log(x)

console.log(isNaN("dfg"))

console.log(5 * "A")
console.log(40 / 0)


console.log("**********************")

function calculateArea(width, height) {
    // if (isNaN(width) || isNaN(height)) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error("One of them is not a number")
    }
    else {
        return width * height
    }
}


try {

    console.log(calculateArea(5, "w"))
} catch (error) {
    console.error("Custom error : " + error.message)
}


console.log(calculateArea(5, 8))


// consoe.log("fgsdfg")


// t = 15;

// console.log(t)


/****************************** While loop ******************************/
var u = 0;

while (u <= 10) {
    console.log(u)
    u++
}

console.log("********************")


var r = 10;

while (r >= 0) {
    console.log(r)
    r--
}
console.log("********************")

/****************************** Do while loop ******************************/

var i = 100
do {
    console.log(i)
    i++
} while (i < 10);

console.log("********************")

/****************************** For loop ******************************/

for (var q = 0; q <= 10; q++) {
    console.log(q)
}


var people = ["Mohamed", "Mina", "Rana", "Bavly", "Ibrahim", "Esraa"]

for (var index = 0; index < people.length; index++) {
    console.log(people[index])
}

console.log("********************")

for (var index = people.length - 1; index >= 0; index--) {
    console.log(people[index])
}

console.log("********************")

for (var o = 0; o <= 10; o += 2) {
    console.log(o)
}

console.log("********************")

for (var o = 0; o <= 10; o++) {
    if (o % 2 == 1) { continue } // skip odd numbers
    console.log(o)
}



console.log("********************")

for (var g = 0; g <= 10; g++) {
    // if (g == 5) { continue }
    if (g == 5) { break }
    console.log(g)
}